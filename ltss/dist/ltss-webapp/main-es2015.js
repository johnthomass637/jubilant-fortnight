(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Common/Header/Header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Common/Header/Header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\r\n <div>\r\n\r\n\r\n    <div class=\"proName\">\r\n        Anthem.\r\n     </div>\r\n\r\n        <div class=\"proName1\">\r\n                Long Term Service & Supports (LTSS) <br/>\r\n          <div class=\"proName2\">\r\n                Healthy Innovations Platform\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n            <div class=\"proName3\">\r\n                    LTSSPERF16 CSUP6 <br/>\r\n              <div class=\"proName3\">\r\n                    Case Supervisor\r\n              </div>\r\n            </div>\r\n            <div>\r\n\r\n                    <div class=\"proName4\">\r\n                      <div>\r\n                            Logout <br/>\r\n                      </div>\r\n                      <div class=\"proName5\">\r\n                        Switch Markets\r\n                      </div>\r\n                      <img class=\"icon\" src=\"../../assets/webglobe.png\"/><br/>\r\n                    </div>\r\n\r\n            </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<hr>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/member-create/member-create.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/member-create/member-create.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<app-sidebar></app-sidebar>\r\n\r\n\r\n<div style=\"margin-left: 12%;margin-top: 10%;padding-right: 23px;\">\r\n\r\n  <div class=\"example-container mat-elevation-z8\">\r\n      <div >\r\n          <span style=\"color: #2872B3\"> Add New Cases</span>\r\n          <div class=\"sortDiv\" style=\"float: right;\">\r\n            <button class=\"minimal buttonExport\" style=\"color: #2872B3\"> Export in Excel </button>       \r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n        </div>\r\n\r\n\r\n<!-- \r\n<div class=\"button-row\">\r\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/members']\"><mat-icon>list</mat-icon></a>\r\n</div> -->\r\n<form [formGroup]=\"memberForm\" (ngSubmit)=\"onFormSubmit(memberForm.value)\">\r\n\r\n\r\n    <div style=\"width: 100%;float: left;\">\r\n        <span style=\"float: left; width: 100%;padding-left: 12px;\">\r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Member ID</span><br>\r\n                <input matInput  formControlName=\"memberid\" required class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('memberid').valid && memberForm.get('memberid').touched\" class=\"errorClass\">Please enter Member ID</span>\r\n              </div>\r\n  \r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Member First Name</span><br>\r\n                <input matInput formControlName=\"memfirstname\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('memfirstname').valid && memberForm.get('memfirstname').touched\" class=\"errorClass\">Please enter the First Name of the Member</span>\r\n              </div>\r\n  \r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Member Last Name</span><br>\r\n                <input matInput formControlName=\"memlastname\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('memlastname').valid && memberForm.get('memlastname').touched\" class=\"errorClass\">Please enter the Last Name of the Member</span>\r\n              </div>\r\n              \r\n  \r\n              <div style=\"margin-top: 15px\">  \r\n                <span class=\"inputName\">Assessment Type</span>  <br>  \r\n                <input matInput  formControlName=\"assesstype\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('assesstype').valid && memberForm.get('assesstype').touched\" class=\"errorClass\">Assessment Type</span>\r\n              </div>\r\n  \r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Status</span><br>\r\n                <input matInput formControlName=\"status\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('status').valid && memberForm.get('status').touched\" class=\"errorClass\">Status</span>\r\n              </div>\r\n\r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Contact Date</span><br>\r\n                <input matInput type=\"date\" formControlName=\"cntdate\" class=\"textboxClassDate\"><br>\r\n                <span *ngIf=\"!memberForm.get('cntdate').valid && memberForm.get('cntdate').touched\" class=\"errorClass\">Contact Date</span>\r\n              </div>\r\n  \r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Location of Visit</span><br>\r\n                <input matInput formControlName=\"locofvis\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('locofvis').valid && memberForm.get('locofvis').touched\" class=\"errorClass\">Enter the Location of Visit</span>\r\n              </div>\r\n  \r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Contact person or entity</span><br>\r\n                <input matInput  formControlName=\"cntentity\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('cntentity').valid && memberForm.get('cntentity').touched\" class=\"errorClass\">Contact person or entity</span>\r\n              </div>\r\n  \r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Contact Name</span><br>\r\n                <input matInput  formControlName=\"cntname\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('cntname').valid && memberForm.get('cntname').touched\" class=\"errorClass\">Contact Name</span>\r\n              </div>\r\n    \r\n\r\n              <div style=\"margin-top: 15px\">\r\n                  <span class=\"inputName\">Did this contact include the interdisciplinary team members chosen by the member</span><br>\r\n                  <input matInput formControlName=\"intdispmem\" class=\"textboxClass\"><br>\r\n                  <span *ngIf=\"!memberForm.get('intdispmem').valid && memberForm.get('intdispmem').touched\" class=\"errorClass\">Did this contact include the interdisciplinary team members chosen by the member</span>\r\n                </div>\r\n    \r\n                <div style=\"margin-top: 15px\">\r\n                  <span class=\"inputName\">Is the member experiencing eligibility issue?</span><br>\r\n                  <input matInput  formControlName=\"elgbleissue\" class=\"textboxClass\"><br>\r\n                  <span *ngIf=\"!memberForm.get('elgbleissue').valid && memberForm.get('elgbleissue').touched\" class=\"errorClass\">Is the member experiencing eligibility issue</span>\r\n                </div>\r\n    \r\n                <div style=\"margin-top: 15px\">\r\n                  <span class=\"inputName\">Are the member service correctly authorized</span><br>\r\n                  <input matInput   formControlName=\"memserve\" class=\"textboxClass\"><br>\r\n                  <span *ngIf=\"!memberForm.get('memserve').valid && memberForm.get('memserve').touched\" class=\"errorClass\">Are the member service correctly authorized</span>\r\n                </div>\r\n                \r\n                <div style=\"margin-top: 15px\">\r\n                  <span class=\"inputName\">If no, what steps have been taken to cover the service gaps</span><br>\r\n                  <input matInput formControlName=\"servegap\" class=\"textboxClass\"><br>\r\n                  <span *ngIf=\"!memberForm.get('servegap').valid && memberForm.get('servegap').touched\" class=\"errorClass\">If no, what steps have been taken to cover the service gaps?</span>\r\n                </div>\r\n    \r\n                <div style=\"margin-top: 15px\">\r\n                  <span class=\"inputName\">Observation of the member’s physical condition i.e, skin, weight, visible injuries etc</span><br>\r\n                  <input matInput  formControlName=\"phycond\" class=\"textboxClass\"><br>\r\n                  <span *ngIf=\"!memberForm.get('phycond').valid && memberForm.get('phycond').touched\" class=\"errorClass\">Observation of the member’s physical condition i.e, skin, weight, visible injuries etc</span>\r\n                </div>\r\n    \r\n                <div style=\"margin-top: 15px\">\r\n                  <span class=\"inputName\">Were any actions required to address the member’s physical changes</span><br>\r\n                  <input matInput   formControlName=\"phychange\" class=\"textboxClass\"><br>\r\n                  <span *ngIf=\"!memberForm.get('phychange').valid && memberForm.get('phychange').touched\" class=\"errorClass\">Were any actions required to address the member’s physical changes</span>\r\n                </div>\r\n\r\n                <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Any upcoming medical Appointments</span><br>\r\n                <input matInput   formControlName=\"medappnt\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('medappnt').valid && memberForm.get('medappnt').touched\" class=\"errorClass\">Any upcoming medical Appointments</span>\r\n              </div>\r\n\r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Observation of the member’s physical environment</span><br>\r\n                <input matInput   formControlName=\"phyenv\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('phyenv').valid && memberForm.get('phyenv').touched\" class=\"errorClass\">Observation of the member’s physical environment</span>\r\n              </div>\r\n\r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Observation of the member’s mood and emotional well-being</span><br>\r\n                <input matInput   formControlName=\"moodemo\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('moodemo').valid && memberForm.get('moodemo').touched\" class=\"errorClass\">Observation of the member’s mood and emotional well-being</span>\r\n              </div>\r\n\r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Any recent falls</span><br>\r\n                <input matInput   formControlName=\"recfall\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('recfall').valid && memberForm.get('recfall').touched\" class=\"errorClass\">Any recent falls</span>\r\n              </div>\r\n\r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Is member satisfied with current service and care</span><br>\r\n                <input matInput   formControlName=\"servcare\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('servcare').valid && memberForm.get('servcare').touched\" class=\"errorClass\">Is member satisfied with current service and care</span>\r\n              </div>\r\n\r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Were any new risks identified for the member</span><br>\r\n                <input matInput   formControlName=\"memrisk\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('memrisk').valid && memberForm.get('memrisk').touched\" class=\"errorClass\">Were any new risks identified for the member</span>\r\n              </div>\r\n\r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Restrictive intervention was applied to the member that was not included on the plan of care</span><br>\r\n                <input matInput   formControlName=\"restintrv\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('restintrv').valid && memberForm.get('restintrv').touched\" class=\"errorClass\">Restrictive intervention was applied to the member that was not included on the plan of care</span>\r\n              </div>\r\n\r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Did the meeting result in a change in the plan of care</span><br>\r\n                <input matInput   formControlName=\"memresult\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('memresult').valid && memberForm.get('memresult').touched\" class=\"errorClass\">Did the meeting result in a change in the plan of care</span>\r\n              </div>\r\n\r\n              <div style=\"margin-top: 15px\">\r\n                <span class=\"inputName\">Other topic discussed</span><br>\r\n                <input matInput   formControlName=\"othtopic\" class=\"textboxClass\"><br>\r\n                <span *ngIf=\"!memberForm.get('othtopic').valid && memberForm.get('othtopic').touched\" class=\"errorClass\">Other topic discussed</span>\r\n              </div>\r\n\r\n              <div style=\"margin-top: 15px\">\r\n                  <span class=\"inputName\">Completed by</span><br>\r\n                  <input matInput   formControlName=\"nursename\" class=\"textboxClass\"><br>\r\n                  <span *ngIf=\"!memberForm.get('nursename').valid && memberForm.get('nursename').touched\" class=\"errorClass\">Completed by</span>\r\n                </div>\r\n\r\n              <div class=\"button-row\" >\r\n                <button type=\"submit\" class=\"validateBtn\"  [disabled]=\"!memberForm.valid\" mat-raised-button class=\"validateBtn\">SAVE</button>\r\n              </div>\r\n        </span>\r\n      </div>\r\n\r\n  <!-- <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Member ID\" formControlName=\"memberid\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('memberid').valid && memberForm.get('memberid').touched\">Please enter Member ID</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Member First Name\" formControlName=\"memfirstname\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('memfirstname').valid && memberForm.get('memfirstname').touched\">Please enter the First Name of the Member</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Member Last Name\" formControlName=\"memlastname\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('memlastname').valid && memberForm.get('memlastname').touched\">Please enter the Last Name of the Member</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Assessment Type\" formControlName=\"assesstype\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('assesstype').valid && memberForm.get('assesstype').touched\">Assessment Type</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Status\" formControlName=\"status\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('status').valid && memberForm.get('status').touched\">Status</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input type=\"date\" matInput placeholder=\"Contact Date\" formControlName=\"cntdate\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('cntdate').valid && memberForm.get('cntdate').touched\">Contact Date</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Location of Visit\" formControlName=\"locofvis\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('locofvis').valid && memberForm.get('locofvis').touched\">Enter the Location of Visit</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Contact person or entity\" formControlName=\"cntentity\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('cntentity').valid && memberForm.get('cntentity').touched\">Contact person or entity</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Contact Name\" formControlName=\"cntname\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('cntname').valid && memberForm.get('cntname').touched\">Contact Name</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Did this contact include the interdisciplinary team members chosen by the member\" formControlName=\"intdispmem\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('intdispmem').valid && memberForm.get('intdispmem').touched\">Did this contact include the interdisciplinary team members chosen by the member</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Is the member experiencing eligibility issue?\" formControlName=\"elgbleissue\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('elgbleissue').valid && memberForm.get('elgbleissue').touched\">Is the member experiencing eligibility issue</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Are the member service correctly authorized\" formControlName=\"memserve\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('memserve').valid && memberForm.get('memserve').touched\">Are the member service correctly authorized</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"If no, what steps have been taken to cover the service gaps\" formControlName=\"servegap\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('servegap').valid && memberForm.get('servegap').touched\">If no, what steps have been taken to cover the service gaps?</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Observation of the member’s physical condition i.e, skin, weight, visible injuries etc\" formControlName=\"phycond\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('phycond').valid && memberForm.get('phycond').touched\">Observation of the member’s physical condition i.e, skin, weight, visible injuries etc</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Were any actions required to address the member’s physical changes\" formControlName=\"phychange\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('phychange').valid && memberForm.get('phychange').touched\">Were any actions required to address the member’s physical changes</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Any upcoming medical Appointments\" formControlName=\"medappnt\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('medappnt').valid && memberForm.get('medappnt').touched\">Any upcoming medical Appointments</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Observation of the member’s physical environment\" formControlName=\"phyenv\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('phyenv').valid && memberForm.get('phyenv').touched\">Observation of the member’s physical environment</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Observation of the member’s mood and emotional well-being\" formControlName=\"moodemo\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('moodemo').valid && memberForm.get('moodemo').touched\">Observation of the member’s mood and emotional well-being</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Any recent falls\" formControlName=\"recfall\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('recfall').valid && memberForm.get('recfall').touched\">Any recent falls</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Is member satisfied with current service and care\" formControlName=\"servcare\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('servcare').valid && memberForm.get('servcare').touched\">Is member satisfied with current service and care</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Were any new risks identified for the member\" formControlName=\"memrisk\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('memrisk').valid && memberForm.get('memrisk').touched\">Were any new risks identified for the member</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Restrictive intervention was applied to the member that was not included on the plan of care\" formControlName=\"restintrv\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('restintrv').valid && memberForm.get('restintrv').touched\">Restrictive intervention was applied to the member that was not included on the plan of care</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Did the meeting result in a change in the plan of care\" formControlName=\"memresult\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('memresult').valid && memberForm.get('memresult').touched\">Did the meeting result in a change in the plan of care</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Other topic discussed\" formControlName=\"othtopic\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('othtopic').valid && memberForm.get('othtopic').touched\">Other topic discussed</span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Completed by\" formControlName=\"nursename\"\r\n           [errorStateMatcher]=\"matcher\">\r\n    <mat-error>\r\n      <span *ngIf=\"!memberForm.get('nursename').valid && memberForm.get('nursename').touched\">Completed by</span>\r\n    </mat-error>\r\n\t</mat-form-field> \r\n  <div class=\"button-row\">\r\n    <button type=\"submit\" [disabled]=\"!memberForm.valid\" mat-raised-button color=\"primary\">SAVE</button>\r\n  </div> -->\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/member-detail/member-detail.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/member-detail/member-detail.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div>\n    <div class=\"proName\">\n        Dashboard    >\n      </div>\n      <div class=\"proName\">\n          Tasks    >\n     </div>\n     <div class=\"proName\">\n        Monthly Contacts    >\n    </div>\n    \n    <div class=\"proName1\">\n        Face to Face Contact Notes   >\n    </div>\n  <div style=\"margin-left: 1%;\">\n    <table id=\"customers\">\n        <tr>\n          <th colspan=\"6\" id=\"tableth\">Richard Mockmore</th>\n        </tr>\n        <tr>\n          <th>Member ID</th>\n          <th>Eligibility Start Date</th>\n          <th>Gender</th>\n          <th>Residence</th>\n          <th>Case Status</th>\n          <th>Case Owner</th>\n\n        </tr>\n        <tr>\n            <td>{{member.memberid}}</td>\n          <!-- <th>Eligibility Start Date</th> -->\n          <td>04/01/2016</td>\n          <td>Male</td>\n          <td>712-520-7070</td>\n          <td>{{member.status}}</td>\n          <td>LTSSPERF16 CSUP6</td>\n        </tr>\n       \n          <!-- <br> -->\n           <tr>\n              <th>DOB</th>\n              <th>Eligibility End Date</th>\n              <th>Language</th>\n              <th>Cell Phone</th>\n              <th>Case Status Reason</th>\n              <th>Secondary Case Owner</th>\n              \n            </tr> \n           <tr>\n                <td>04/22/1975</td>\n                <td>12/31/2199</td>\n                <td>Unknown</td>\n                <td></td>\n                <td>Assigned</td>\n                <td></td>\n              </tr>\n              <tr>\n                  <th>Age</th>\n                  <th>LOC Date</th>\n                  <th>Living Arrangement</th>\n                  <th>Email</th>\n                  <th></th>\n                  <th></th>\n                  \n                </tr> \n               <tr>\n                    <td>44</td>\n                    <td>{{member.cntdate}}</td>\n                    <td>Unknown</td>\n                    <td></td>\n                  <td></td>\n                  <td></td>\n                  </tr>\n      </table>\n</div>\n\n</div>\n<app-sidebar></app-sidebar>\n\n<div style=\"margin-left: 17%;margin-top: 4%; width: 90%;\">\n    <div class=\"content-set-container\">\n\n    <div class=\"example-container mat-elevation-z8\">\n      <!-- <div > -->\n        <!-- <span style=\"color: #2872B3;padding: 50px;\"> Member ID : {{member.memberid}}</span> -->\n        <!-- <div class=\"sortDiv\" st yle=\"float: right;\"> -->\n          <!-- <button class=\"minimal buttonExport\" style=\"color: #2872B3\"> Export in Excel </button>        -->\n        <!-- </div> -->\n        <!-- <div class=\"clearfix\"></div> -->\n        <!-- <hr> -->\n      <!-- </div>  -->\n\n\n      <!-- <div style=\"width: 100%;float: left;\"> -->\n          <!-- <span style=\"float: left; width: 25%\">\n              <div class=\"profile\">\n                  <span style=\"font-size: 20px\">{{member.memfirstname}} {{member.memlastname}}</span><br/>\n                  <span style=\"color: #3c8bc6;font-size: 14px;\">Member ID:</span><br/>\n                  <span style=\"color: #3c8bc6\">{{member.memberid}}</span>\n                </div>    \n          </span> -->\n    \n          <!-- <span style=\"float: right;width: 75%;\"> -->\n              <!-- <table cellspacing=\"10\">\n                  <tr>\n                    <td>\n                      <span class=\"contentHead\">Member First Name</span><br>\n                      <span class=\"contentResult\">{{member.memfirstname}}</span>\n                    </td>\n                    <td>\n                      <span class=\"contentHead\">Member Last Name </span><br>\n                      <span class=\"contentResult\">{{member.memlastname}}</span>\n                    </td>\n                    <td>\n                      <span class=\"contentHead\">Contact person or entity</span><br>\n                      <span class=\"contentResult\">{{member.cntentity}}</span>\n                    </td>                  \n                  </tr>\n  \n                  <tr>\n                    <td>\n                      <span class=\"contentHead\">Contact date</span><br>\n                      <span class=\"contentResult\">{{member.cntdate}}</span>\n                    </td>\n                    <td>\n                      <span class=\"contentHead\">Location of Visit</span><br>\n                      <span class=\"contentResult\">{{member.locofvis}}</span>\n                    </td>\n                    <td>\n                      <span class=\"contentHead\">Contact Name</span><br>\n                      <span class=\"contentResult\">{{member.cntname}}</span>\n                    </td>\n                  </tr>\n  \n                </table><br/> -->\n              <!-- </span> -->\n            <!-- </div> -->\n\n            <div style=\"width: 100%;float: left;\">\n\n                    <span style=\"float: left;width: 100%;padding-left: 45px;background-color: #DAF3F9\">\n                        <div style=\"margin-top: 15px\">\n                            <span style=\"font-size: 16px;margin-left: 9px;\">1.&nbsp;</span><span class=\"contentHeadQus\">Did this contact include the interdisciplinary team members chosen by the member  :</span><br>\n                        <span class=\"contentResultAns\">{{member.intdispmem}}</span>\n                     </div>\n\n                        <div style=\"margin-top: 15px\">\n                            <span style=\"font-size: 16px;margin-left: 9px;\">2.&nbsp;</span><span class=\"contentHeadQus\">Is the member experiencing eligibility issue  :</span><br>\n                        <span class=\"contentResultAns\">{{member.elgbleissue}}</span>\n                     </div>\n                 \n                     <div style=\"margin-top: 15px\">\n                        <span style=\"font-size: 16px;margin-left: 9px;\">3.&nbsp;</span><span class=\"contentHeadQus\">Are the member service correctly authorized :</span><br>\n                        <span class=\"contentResultAns\">{{member.memserve}}</span>\n                     </div>\n\n                     <div style=\"margin-top: 15px\">\n                        <span style=\"font-size: 16px;margin-left: 9px;\">4.&nbsp;</span><span class=\"contentHeadQus\">If no, what steps have been taken to cover the service gaps :</span><br>\n                        <span class=\"contentResultAns\">{{member.servegap}}</span>\n                     </div>\n\n                     <div style=\"margin-top: 15px\">\n                        <span style=\"font-size: 16px;margin-left: 9px;\">5.&nbsp;</span><span class=\"contentHeadQus\">Observation of the member’s physical condition i.e, skin, weight, visible injuries etc  :</span><br>\n                        <span class=\"contentResultAns\">{{member.phycond}}</span>\n                     </div>\n\n                     <div style=\"margin-top: 15px\">\n                        <span style=\"font-size: 16px;margin-left: 9px;\">6.&nbsp;</span><span class=\"contentHeadQus\">Were any actions required to address the member’s physical changes  :</span><br>\n                        <span class=\"contentResultAns\">{{member.phychange}}</span>\n                     </div>\n\n                     <div style=\"margin-top: 15px\">\n                        <span style=\"font-size: 16px;margin-left: 9px;\">7.&nbsp;</span><span class=\"contentHeadQus\">Any upcoming medical Appointments :</span><br>\n                        <span class=\"contentResultAns\">{{member.medappnt}}</span>\n                     </div>\n\n                     <div style=\"margin-top: 15px\">\n                        <span style=\"font-size: 16px;margin-left: 9px;\">8.&nbsp;</span><span class=\"contentHeadQus\">Observation of the member’s mood and emotional well-being :</span><br>\n                        <span class=\"contentResultAns\">{{member.moodemo}}</span>\n                     </div>\n\n                     <div style=\"margin-top: 15px\">\n                        <span style=\"font-size: 16px;margin-left: 9px;\">9.&nbsp;</span><span class=\"contentHeadQus\">Is member satisfied with current service and care :</span><br>\n                        <span class=\"contentResultAns\">{{member.servcare}}</span>\n                     </div>\n\n                     <div style=\"margin-top: 15px\">\n                        <span style=\"font-size: 16px\">10.&nbsp;</span><span class=\"contentHeadQus\">Were any new risks identified for the member  :</span><br>\n                        <span class=\"contentResultAns\">{{member.memrisk}}</span>\n                     </div>\n\n                     <div style=\"margin-top: 15px\">\n                        <span style=\"font-size: 16px\">11.&nbsp;</span><span class=\"contentHeadQus\">Restrictive intervention was applied to the member that was not included on the plan of care  :</span><br>\n                        <span class=\"contentResultAns\">{{member.restintrv}}</span>\n                     </div>\n\n                     <div style=\"margin-top: 15px\">\n                        <span style=\"font-size: 16px\">12.&nbsp;</span><span class=\"contentHeadQus\">Did the meeting result in a change in the plan of care  :</span><br>\n                        <span class=\"contentResultAns\">{{member.memresult}}</span>\n                     </div>\n\n                     <div style=\"margin-top: 15px\">\n                        <span style=\"font-size: 16px\">13.&nbsp;</span><span class=\"contentHeadQus\">Other topic discussed :</span><br>\n                        <span class=\"contentResultAns\">{{member.othtopic}}</span>\n                     </div>\n                \n                     <div style=\"margin-top: 15px\">\n                        <span style=\"font-size: 16px\">14.&nbsp;</span><span class=\"contentHeadQus\">Completed by  :</span><br>\n                        <span class=\"contentResultAns\">{{member.nursename}}</span>\n                     </div>\n                    </span>\n            </div>\n\n              <span>\n               <br>\n               <br>\n                  <div style=\"float: left;\">\n                    <button [routerLink]=\"['/member-edit', member._id]\" class=\"editBtn\"><img src=\"../../assets/edit.png\"/> &nbsp;Edit</button>\n                    <button class=\"deleteBtn\" (click)=\"deleteMember(member._id)\"><img src=\"../../assets/delete.png\"/> &nbsp;Delete</button>\n                  </div>\n    \n                  <!-- <div style=\"float: right;\">\n                      <button class=\"validateBtn\">VALIDATE</button>\n                    </div> -->\n              </span>\n</div><br>\n</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/member-edit/member-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/member-edit/member-edit.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-sidebar></app-sidebar>\n\n<div style=\"margin-left: 19%;margin-top: 5%;padding-right: 23px;\">\n\n    <div class=\"example-container mat-elevation-z8\">\n    \n        <div >\n            <span style=\"color: #2872B3\"> Edit New Cases</span>\n            <div class=\"sortDiv\" style=\"float: right;\">\n              <button class=\"minimal buttonExport\" style=\"color: #2872B3\"> Export in Excel </button>       \n            </div>\n            <div class=\"clearfix\"></div>\n            <hr>\n          </div>\n  \n\n<form [formGroup]=\"memberForm\" (ngSubmit)=\"onFormSubmit(memberForm.value)\">\n\n    <div style=\"width: 100%;float: left;\">\n        <span style=\"float: left; width: 100%;padding-left: 12px;\">\n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Member ID</span><br>\n                <input matInput  formControlName=\"memberid\" required class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('memberid').valid && memberForm.get('memberid').touched\" class=\"errorClass\">Please enter Member ID</span>\n              </div>\n  \n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Member First Name</span><br>\n                <input matInput formControlName=\"memfirstname\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('memfirstname').valid && memberForm.get('memfirstname').touched\" class=\"errorClass\">Please enter the First Name of the Member</span>\n              </div>\n  \n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Member Last Name</span><br>\n                <input matInput formControlName=\"memlastname\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('memlastname').valid && memberForm.get('memlastname').touched\" class=\"errorClass\">Please enter the Last Name of the Member</span>\n              </div>\n              \n  \n              <div style=\"margin-top: 15px\">  \n                <span class=\"inputName\">Assessment Type</span>  <br>  \n                <input matInput  formControlName=\"assesstype\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('assesstype').valid && memberForm.get('assesstype').touched\" class=\"errorClass\">Assessment Type</span>\n              </div>\n  \n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Status</span><br>\n                <input matInput formControlName=\"status\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('status').valid && memberForm.get('status').touched\" class=\"errorClass\">Status</span>\n              </div>\n\n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Contact Date</span><br>\n                <input matInput type=\"date\" formControlName=\"cntdate\" class=\"textboxClassDate\"><br>\n                <span *ngIf=\"!memberForm.get('cntdate').valid && memberForm.get('cntdate').touched\" class=\"errorClass\">Contact Date</span>\n              </div>\n  \n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Location of Visit</span><br>\n                <input matInput formControlName=\"locofvis\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('locofvis').valid && memberForm.get('locofvis').touched\" class=\"errorClass\">Enter the Location of Visit</span>\n              </div>\n  \n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Contact person or entity</span><br>\n                <input matInput  formControlName=\"cntentity\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('cntentity').valid && memberForm.get('cntentity').touched\" class=\"errorClass\">Contact person or entity</span>\n              </div>\n  \n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Contact Name</span><br>\n                <input matInput  formControlName=\"cntname\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('cntname').valid && memberForm.get('cntname').touched\" class=\"errorClass\">Contact Name</span>\n              </div>\n    \n\n              <div style=\"margin-top: 15px\">\n                  <span class=\"inputName\">Did this contact include the interdisciplinary team members chosen by the member</span><br>\n                  <input matInput formControlName=\"intdispmem\" class=\"textboxClass\"><br>\n                  <span *ngIf=\"!memberForm.get('intdispmem').valid && memberForm.get('intdispmem').touched\" class=\"errorClass\">Did this contact include the interdisciplinary team members chosen by the member</span>\n                </div>\n    \n                <div style=\"margin-top: 15px\">\n                  <span class=\"inputName\">Is the member experiencing eligibility issue?</span><br>\n                  <input matInput  formControlName=\"elgbleissue\" class=\"textboxClass\"><br>\n                  <span *ngIf=\"!memberForm.get('elgbleissue').valid && memberForm.get('elgbleissue').touched\" class=\"errorClass\">Is the member experiencing eligibility issue</span>\n                </div>\n    \n                <div style=\"margin-top: 15px\">\n                  <span class=\"inputName\">Are the member service correctly authorized</span><br>\n                  <input matInput   formControlName=\"memserve\" class=\"textboxClass\"><br>\n                  <span *ngIf=\"!memberForm.get('memserve').valid && memberForm.get('memserve').touched\" class=\"errorClass\">Are the member service correctly authorized</span>\n                </div>\n                \n                <div style=\"margin-top: 15px\">\n                  <span class=\"inputName\">If no, what steps have been taken to cover the service gaps</span><br>\n                  <input matInput formControlName=\"servegap\" class=\"textboxClass\"><br>\n                  <span *ngIf=\"!memberForm.get('servegap').valid && memberForm.get('servegap').touched\" class=\"errorClass\">If no, what steps have been taken to cover the service gaps?</span>\n                </div>\n    \n                <div style=\"margin-top: 15px\">\n                  <span class=\"inputName\">Observation of the member’s physical condition i.e, skin, weight, visible injuries etc</span><br>\n                  <input matInput  formControlName=\"phycond\" class=\"textboxClass\"><br>\n                  <span *ngIf=\"!memberForm.get('phycond').valid && memberForm.get('phycond').touched\" class=\"errorClass\">Observation of the member’s physical condition i.e, skin, weight, visible injuries etc</span>\n                </div>\n    \n                <div style=\"margin-top: 15px\">\n                  <span class=\"inputName\">Were any actions required to address the member’s physical changes</span><br>\n                  <input matInput   formControlName=\"phychange\" class=\"textboxClass\"><br>\n                  <span *ngIf=\"!memberForm.get('phychange').valid && memberForm.get('phychange').touched\" class=\"errorClass\">Were any actions required to address the member’s physical changes</span>\n                </div>\n\n                <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Any upcoming medical Appointments</span><br>\n                <input matInput   formControlName=\"medappnt\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('medappnt').valid && memberForm.get('medappnt').touched\" class=\"errorClass\">Any upcoming medical Appointments</span>\n              </div>\n\n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Observation of the member’s physical environment</span><br>\n                <input matInput   formControlName=\"phyenv\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('phyenv').valid && memberForm.get('phyenv').touched\" class=\"errorClass\">Observation of the member’s physical environment</span>\n              </div>\n\n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Observation of the member’s mood and emotional well-being</span><br>\n                <input matInput   formControlName=\"moodemo\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('moodemo').valid && memberForm.get('moodemo').touched\" class=\"errorClass\">Observation of the member’s mood and emotional well-being</span>\n              </div>\n\n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Any recent falls</span><br>\n                <input matInput   formControlName=\"recfall\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('recfall').valid && memberForm.get('recfall').touched\" class=\"errorClass\">Any recent falls</span>\n              </div>\n\n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Is member satisfied with current service and care</span><br>\n                <input matInput   formControlName=\"servcare\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('servcare').valid && memberForm.get('servcare').touched\" class=\"errorClass\">Is member satisfied with current service and care</span>\n              </div>\n\n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Were any new risks identified for the member</span><br>\n                <input matInput   formControlName=\"memrisk\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('memrisk').valid && memberForm.get('memrisk').touched\" class=\"errorClass\">Were any new risks identified for the member</span>\n              </div>\n\n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Restrictive intervention was applied to the member that was not included on the plan of care</span><br>\n                <input matInput   formControlName=\"restintrv\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('restintrv').valid && memberForm.get('restintrv').touched\" class=\"errorClass\">Restrictive intervention was applied to the member that was not included on the plan of care</span>\n              </div>\n\n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Did the meeting result in a change in the plan of care</span><br>\n                <input matInput   formControlName=\"memresult\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('memresult').valid && memberForm.get('memresult').touched\" class=\"errorClass\">Did the meeting result in a change in the plan of care</span>\n              </div>\n\n              <div style=\"margin-top: 15px\">\n                <span class=\"inputName\">Other topic discussed</span><br>\n                <input matInput   formControlName=\"othtopic\" class=\"textboxClass\"><br>\n                <span *ngIf=\"!memberForm.get('othtopic').valid && memberForm.get('othtopic').touched\" class=\"errorClass\">Other topic discussed</span>\n              </div>\n\n              <div style=\"margin-top: 15px\">\n                  <span class=\"inputName\">Completed by</span><br>\n                  <input matInput   formControlName=\"nursename\" class=\"textboxClass\"><br>\n                  <span *ngIf=\"!memberForm.get('nursename').valid && memberForm.get('nursename').touched\" class=\"errorClass\">Completed by</span>\n                </div>\n\n              <div class=\"button-row\" >\n                <button type=\"submit\" class=\"validateBtn\" [disabled]=\"!memberForm.valid\" mat-raised-button class=\"validateBtn\">SAVE</button>\n              </div>\n        </span>\n      </div>\n\n      \n  <!-- <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Member ID\" formControlName=\"memberid\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('memberid').valid && memberForm.get('memberid').touched\">Please enter Member ID</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Member First Name\" formControlName=\"memfirstname\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('memfirstname').valid && memberForm.get('memfirstname').touched\">Please enter the First Name of the Member</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Member Last Name\" formControlName=\"memlastname\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('memlastname').valid && memberForm.get('memlastname').touched\">Please enter the Last Name of the Member</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Assessment Type\" formControlName=\"assesstype\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('assesstype').valid && memberForm.get('assesstype').touched\">Assessment Type</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Status\" formControlName=\"status\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('status').valid && memberForm.get('status').touched\">Status</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Contact Date\" formControlName=\"cntdate\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('cntdate').valid && memberForm.get('cntdate').touched\">Contact Date</span>\n    </mat-error>\n  </mat-form-field> -->\n  <!-- <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Contact Date\" formControlName=\"cntdate\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field> -->\n  <!-- <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Location of Visit\" formControlName=\"locofvis\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('locofvis').valid && memberForm.get('locofvis').touched\">Enter the Location of Visit</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Contact person or entity\" formControlName=\"cntentity\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('cntentity').valid && memberForm.get('cntentity').touched\">Contact person or entity</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Contact Name\" formControlName=\"cntname\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('cntname').valid && memberForm.get('cntname').touched\">Contact Name</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Did this contact include the interdisciplinary team members chosen by the member\" formControlName=\"intdispmem\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('intdispmem').valid && memberForm.get('intdispmem').touched\">Did this contact include the interdisciplinary team members chosen by the member</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Is the member experiencing eligibility issue?\" formControlName=\"elgbleissue\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('elgbleissue').valid && memberForm.get('elgbleissue').touched\">Is the member experiencing eligibility issue</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Are the member service correctly authorized\" formControlName=\"memserve\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('memserve').valid && memberForm.get('memserve').touched\">Are the member service correctly authorized</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"If no, what steps have been taken to cover the service gaps\" formControlName=\"servegap\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('servegap').valid && memberForm.get('servegap').touched\">If no, what steps have been taken to cover the service gaps?</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Observation of the member’s physical condition i.e, skin, weight, visible injuries etc\" formControlName=\"phycond\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('phycond').valid && memberForm.get('phycond').touched\">Observation of the member’s physical condition i.e, skin, weight, visible injuries etc</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Were any actions required to address the member’s physical changes\" formControlName=\"phychange\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('phychange').valid && memberForm.get('phychange').touched\">Were any actions required to address the member’s physical changes</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Any upcoming medical Appointments\" formControlName=\"medappnt\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('medappnt').valid && memberForm.get('medappnt').touched\">Any upcoming medical Appointments</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Observation of the member’s physical environment\" formControlName=\"phyenv\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('phyenv').valid && memberForm.get('phyenv').touched\">Observation of the member’s physical environment</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Observation of the member’s mood and emotional well-being\" formControlName=\"moodemo\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('moodemo').valid && memberForm.get('moodemo').touched\">Observation of the member’s mood and emotional well-being</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Any recent falls\" formControlName=\"recfall\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('recfall').valid && memberForm.get('recfall').touched\">Any recent falls</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Is member satisfied with current service and care\" formControlName=\"servcare\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('servcare').valid && memberForm.get('servcare').touched\">Is member satisfied with current service and care</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Were any new risks identified for the member\" formControlName=\"memrisk\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('memrisk').valid && memberForm.get('memrisk').touched\">Were any new risks identified for the member</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Restrictive intervention was applied to the member that was not included on the plan of care\" formControlName=\"restintrv\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('restintrv').valid && memberForm.get('restintrv').touched\">Restrictive intervention was applied to the member that was not included on the plan of care</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Did the meeting result in a change in the plan of care\" formControlName=\"memresult\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('memresult').valid && memberForm.get('memresult').touched\">Did the meeting result in a change in the plan of care</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Other topic discussed\" formControlName=\"othtopic\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('othtopic').valid && memberForm.get('othtopic').touched\">Other topic discussed</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Completed by\" formControlName=\"nursename\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!memberForm.get('nursename').valid && memberForm.get('nursename').touched\">Completed by</span>\n    </mat-error>\n\t</mat-form-field>\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!memberForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div> -->\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/member/member.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/member/member.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-sidebar></app-sidebar>\n\n<!-- <div className=\"tab-set-options\">\n    <nav>\n      <div\n        class=\"nav nav-tabs\"\n        id=\"nav-tab\"\n        role=\"tablist\"\n       \n      >\n        <a\n          class=\"nav-item nav-link  tab-set-option\"\n          id=\"nav-member-tab\"\n          data-toggle=\"tab\"\n          href=\"#nav-member\"\n          role=\"tab\"\n          aria-controls=\"nav-member\"\n          aria-selected=\"false\"\n        >\n          Dashboard     >\n        </a>\n        <a\n          class=\"nav-item nav-link tab-set-option\"\n          id=\"nav-callerInfo-tab\"\n          data-toggle=\"tab\"\n          href=\"#nav-callerInfo\"\n          role=\"tab\"\n          aria-controls=\"nav-callerInfo\"\n          aria-selected=\"false\"\n        >\n          Tasks        >\n        </a>\n        <a\n          class=\"nav-item nav-link tab-set-option\"\n          id=\"nav-procedureSearch-tab\"\n          data-toggle=\"tab\"\n          href=\"#nav-procedureSearch\"\n          role=\"tab\"\n          aria-controls=\"nav-procedureSearch\"\n          aria-selected=\"false\"\n        >\n          Monthly Contacts   > \n        </a>\n\n        <a\n          class=\"nav-item nav-link active tab-set-option\"\n          id=\"nav-procedureSearch-tab\"\n          data-toggle=\"tab\"\n          href=\"#nav-procedureSearch\"\n          role=\"tab\"\n          aria-controls=\"nav-procedureSearch\"\n          aria-selected=\"true\"\n        >\n          Face to Face Contacts     >\n        </a>\n      </div>\n      \n    </nav>\n  </div> -->\n \n\n\n  <div class=\"proName\">\n    Dashboard    >\n  </div>\n  <div class=\"proName\">\n      Tasks    >\n </div>\n <div class=\"proName\">\n    Monthly Contacts    >\n</div>\n\n<div class=\"proName1\">\n    Face to Face Contact Notes    >\n</div>\n<!-- <div style=\"margin-left: 1%\">\n    <table id=\"customers\">\n        <tr>\n          <th colspan=\"12\" id=\"tableth\">Richard Mockmore</th>\n        </tr>\n        <tr>\n          <th>Member ID</th>\n          <th>Eligibility Start Date</th>\n          <th>Gender</th>\n          <th>Residence</th>\n          <th>Case Status</th>\n          <th>Case Owner</th>\n\n        </tr>\n        <tr>\n            <td>721950160</td>\n       \n          <td>04/01/2016</td>\n          <td>Male</td>\n          <td>712-520-7070</td>\n          <td>Pending</td>\n          <td>LTSSPERF16 CSUP6</td>\n        </tr>\n       \n          \n           <tr>\n              <th>DOB</th>\n              <th>Eligibility End Date</th>\n              <th>Language</th>\n              <th>Cell Phone</th>\n              <th>Case Status Reason</th>\n              <th>Secondary Case Owner</th>\n              \n            </tr> \n           <tr>\n                <td>04/22/1985</td>\n                <td>12/31/2199</td>\n                <td>Unknown</td>\n                <td></td>\n                <td>Assigned</td>\n                <td></td>\n              </tr>\n              <tr>\n                  <th>Age</th>\n                  <th>LOC Date</th>\n                  <th>Living Arrangement</th>\n                  <th>Email</th>\n                  \n                </tr> \n               <tr>\n                    <td>04/22/1985</td>\n                    <td>12/31/2199</td>\n                    <td>Unknown</td>\n                    <td></td>\n                  <td></td>\n                  <td></td>\n                  </tr>\n      </table>\n</div> -->\n\n  <div style=\"margin-left: 15%;margin-top: 5%; \">\n      <div className=\"tab-set-options\">\n          <nav>\n            <div\n          \n              id=\"nav-tab\"\n              role=\"tablist\"\n             \n            >\n              <!-- <a\n                class=\"nav-item nav-link active tab-set-option\"\n                id=\"nav-caseList-tab\"\n                data-toggle=\"tab\"\n                href=\"#nav-caseList\"\n                role=\"tab\"\n                aria-controls=\"nav-caseList\"\n                aria-selected=\"true\"\n              >\n                Assessment List\n              </a>\n              <a\n                class=\"nav-item nav-link tab-set-option\"\n                id=\"nav-submittedCases-tab\"\n                data-toggle=\"tab\"\n                href=\"#nav-submittedCases\"\n                role=\"tab\"\n                aria-controls=\"nav-submittedCases\"\n                aria-selected=\"false\"\n              >\n                Submitted Cases\n              </a>\n              <a\n                class=\"nav-item nav-link tab-set-option\"\n                id=\"nav-rejectedCases-tab\"\n                data-toggle=\"tab\"\n                href=\"#nav-rejectedCases\"\n                role=\"tab\"\n                aria-controls=\"nav-rejectedCases\"\n                aria-selected=\"false\"\n              >\n                Rejected Cases\n              </a>\n              <a\n              class=\"nav-item nav-link tab-set-option\"\n              id=\"nav-pendingCases-tab\"\n              data-toggle=\"tab\"\n              href=\"#nav-pendingCases\"\n              role=\"tab\"\n              aria-controls=\"nav-pendingCases\"\n              aria-selected=\"false\"\n            >\n              Pending Cases\n            </a> -->\n            </div>\n          </nav>\n        </div>\n  \n        <div class=\"content-set-container\">\n            <div class=\"tab-content\" id=\"nav-tabContent\">\n  \n              <div class=\"tab-pane fade show active\" id=\"nav-caseList\" role=\"tabpanel\" aria-labelledby=\"nav-caseList-tab\">\n                <div class=\"container\">\n                    <div class=\"button-row\">\n                        <!-- <a mat-raised-button color=\"primary\" [routerLink]=\"['/case-create']\"><mat-icon>add</mat-icon></a> -->\n                      </div>\n                      <div class=\"example-container mat-elevation-z8\">\n                        <!-- <div >\n                            <input style=\"float: left;\"\n                            class=\"searchbox\"\n                            type=\"text\"\n                            placeholder=\"Search Name...\"\n                            name=\"searchString\"\n                            [(ngModel)]=\"searchString\"\n                          />\n  \n                          <div class=\"sortDiv\" style=\"float: right;\">\n                              <select class=\"minimal\">\n                                <option> Last 30 Days</option>\n                                <option> Last Week</option>\n                                <option> Last 1 month</option>\n                                <option> Last 6 months</option> \n                              </select>\n                            </div>\n                        </div> -->\n\n                          <table mat-table #table [dataSource]=\"dataSource\" >\n                            <!--- Note that these columns can be defined in any order.\n                                  The actual rendered columns are set as a property on the row definition\" -->\n                          <!-- memberid Column -->\n                            <ng-container matColumnDef=\"memberid\">\n                              <th mat-header-cell *matHeaderCellDef> Member ID </th>\n                              <td mat-cell *matCellDef=\"let element\" class=\"memberid-col\" [routerLink]=\"['/member-details/', element._id]\"> {{element.memberid}} </td>\n                            </ng-container>\n                            <!-- memfirstname Column -->\n                            <ng-container matColumnDef=\"memfirstname\">\n                              <th mat-header-cell *matHeaderCellDef> Member Name </th>\n                              <td mat-cell *matCellDef=\"let element\" [routerLink]=\"['/member-details/', element._id]\"> {{element.memfirstname}} {{element.memlastname}} </td>\n                            </ng-container>\n                          <!-- memlastname Column -->\n                            <!-- <ng-container matColumnDef=\"memlastname\">\n                              <th mat-header-cell *matHeaderCellDef> Member Last Name </th>\n                              <td mat-cell *matCellDef=\"let element\"> {{element.memlastname}} </td>\n                            </ng-container> -->\n                            <!-- cntdate Column -->\n                            <ng-container matColumnDef=\"cntdate\">\n                              <th mat-header-cell *matHeaderCellDef> Contact Date </th>\n                              <td mat-cell *matCellDef=\"let element\" [routerLink]=\"['/member-details/', element._id]\"> {{element.cntdate}} </td>\n                            </ng-container>\n                            <!-- assesstype Column -->\n                            <ng-container matColumnDef=\"assesstype\">\n                              <th mat-header-cell *matHeaderCellDef> Assessment Type </th>\n                              <td mat-cell *matCellDef=\"let element\" [routerLink]=\"['/member-details/', element._id]\"> {{element.assesstype}} </td>\n                            </ng-container>\n                            <!-- status Column -->\n                            <ng-container matColumnDef=\"status\">\n                              <th mat-header-cell *matHeaderCellDef> Status </th>\n                              <td mat-cell *matCellDef=\"let element\" [routerLink]=\"['/member-details/', element._id]\"> {{element.status}} </td>\n                            </ng-container>\n\n                    <!-- viewDetails Column -->\n                   \n                      <ng-container matColumnDef=\"view\">\n                        <th mat-header-cell *matHeaderCellDef>  </th>\n                        <td mat-cell *matCellDef=\"let element\" class=\"\"> \n                          <!-- <span class=\"viewDetailClass\"> </span> -->\n                        </td>\n                      </ng-container> \n\n                      <!-- <div class=\"button-row\">\n                          <button type=\"submit\" [disabled]=\"!memberForm.valid\" mat-raised-button color=\"primary\">SAVE</button>\n                        </div> -->\n\n\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"  ></tr>\n                        \n                          </table>\n      </div> \n</div>\n</div>\n\n\n<div class=\"tab-pane fade show\" id=\"nav-submittedCases\" role=\"tabpanel\" aria-labelledby=\"nav-submittedCases-tab\">\n  <div class=\"container\" >\n    \n  </div>\n</div>\n\n\n<div class=\"tab-pane fade show\" id=\"nav-rejectedCases\" role=\"tabpanel\" aria-labelledby=\"nav-rejectedCases-tab\">\n  <div class=\"container\" >\n    \n  </div>\n</div>\n\n\n<div class=\"tab-pane fade show\" id=\"nav-pendingCases\" role=\"tabpanel\" aria-labelledby=\"nav-pendingCases-tab\">\n    <div class=\"container\" >\n      \n    </div>\n  </div>\n\n\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sideBar\">\n    <div class=\"sideBarDiv\"> \n        <!-- <a *ngIf=\"isHome\" [routerLinkActive]=\"['active']\" routerLink=\"/members\"> -->\n            <div class=\"box1\">\n                \n                <span  style=\"color: #8c8e90; font-family: Arial; font-size: 12px; font-weight: 600;\">Member Overview</span>\n            </div>\n        <!-- </a> -->\n    </div>\n\n    <div class=\"sideBarDiv\">\n        <!-- <a *ngIf=\"isHome\" > -->\n            <div class=\"box1\">\n                \n                <span style=\"color: #8c8e90; font-family: Arial; font-size: 12px; font-weight: 600;\">Care Team</span>\n            </div>\n        <!-- </a> -->\n    </div>\n\n        \n        <a *ngIf=\"isHome\" >\n            <div class=\"box1\">\n                \n                <span class=\"navName\" style=\"color: #8c8e90; font-family: Arial; font-size: 12px; font-weight: 600;\">Person Centered Support Plan</span>\n            </div>\n        </a>\n\n\n        <a *ngIf=\"isHome\" >\n            <div class=\"box1\">\n                \n                <span class=\"navName\" style=\"color: #8c8e90; font-family: Arial; font-size: 10px; font-weight: 600;\">Tasks</span>\n            </div>\n        </a>\n\n        <a *ngIf=\"isHome\" >\n            <div class=\"box1\">\n                \n                <span class=\"navName\" style=\"color: #8c8e90; font-family: Arial; font-size: 10px; font-weight: 600;\">Assessments and Forms</span>\n            </div>\n        </a>\n\n\n        <a *ngIf=\"isHome\" >\n            <div class=\"box1\">\n                \n                <span class=\"navName\" style=\"color: #8c8e90; font-family: Arial; font-size: 10px; font-weight: 600;\">Notes</span>\n            </div>\n        </a>\n\n\n        <a *ngIf=\"isHome\" >\n            <div class=\"box1\">\n                \n                <span class=\"navName\" style=\"color: #8c8e90; font-family: Arial; font-size: 10px; font-weight: 600;\">Correspondence</span>\n            </div>\n        </a>\n\n        <a *ngIf=\"isHome\" >\n            <div class=\"box1\">\n                \n                <span class=\"navName\" style=\"color: #8c8e90; font-family: Arial; font-size: 10px; font-weight: 600;\">Documents</span>\n            </div>\n        </a>\n\n        <a *ngIf=\"isHome\" >\n            <div class=\"box1\">\n                \n                <span class=\"navName\" style=\"color: #8c8e90; font-family: Arial; font-size: 10px; font-weight: 600;\">Case History</span>\n            </div>\n        </a>\n\n        <a *ngIf=\"isHome\" >\n            <div class=\"box1\">\n                \n                <span class=\"navName\" style=\"color: #8c8e90; font-family: Arial; font-size: 10px; font-weight: 600;\">Authorisations</span>\n            </div>\n        </a>\n    \n\n<!-- \n        <a *ngIf=\"!isHome\" routerLink=\"/members\" (click)=\"gotoHome()\">\n            <div class=\"sideDiv\">\n                \n                <span class=\"navName\">Member Overview</span>\n            </div>\n        </a>\n    \n        <a *ngIf=\"isAddCase\" [routerLinkActive]=\"['active']\" routerLink=\"/member-create\">\n            <div class=\"sideDiv\">\n                \n                <span class=\"navName\" style=\"color: #2571bb\">Add Assessment</span>\n            </div>\n        </a>\n\n        <a *ngIf=\"!isAddCase\" (click)=\"gotoAddCase()\" routerLink=\"/member-create\" >\n            <div class=\"sideDiv\">\n                \n                <span class=\"navName\" >Add Assesment</span>\n            </div>\n        </a>\n\n    <a *ngIf=\"isMemberList\" [routerLinkActive]=\"['active']\" routerLink=\"/members\">\n        <div class=\"sideDiv\">\n            \n            <span class=\"navName\" style=\"color: #2571bb\">Assesment List</span>\n        </div>\n    </a>\n\n    <a *ngIf=\"!isMemberList\" (click)=\"gotoCaseList()\" routerLink=\"/members\">\n        <div class=\"sideDiv\">\n            \n            <span class=\"navName\">Assesment List</span>\n        </div>\n    </a>\n\n    <a routerLink=\"#\">\n        <div class=\"sideDiv\">\n            \n            <span class=\"navName\">FAQ</span>\n        </div>\n    </a>\n     -->\n\n    \n  </div> \n\n\n<!-- \n\n  <div class=\"sidenav\">\n        <a>ssssssssssssssssssssssssssssss</a><br>\n  </div>\n\n\n<div class=\"box1\">\n        <a >Care Team</a><br>\n</div>\n\n<div class=\"box1\">\n        <a >Person Centered</a><br>\n</div>\n\n\n<a >Person Centered</a><br>\n<a >Tasks</a><br>\n<a>Assessments ands Forms</a><br>\n<a >Notes</a><br>\n<a >Correspondence</a><br>\n<a >Documents</a><br>\n<a>Case History</a><br>\n<a>Authorisations</a> -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Common/Header/Header.component.css":
/*!****************************************************!*\
  !*** ./src/app/Common/Header/Header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\r\n\theight: 65px;\r\n\tbackground-color: white;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0%;\r\n\tright: 0;\r\n\tz-index: 999;\r\n\t\r\n\t/* -webkit-box-shadow: 10px 7px 11px -5px rgba(115, 115, 115, 0.18);\r\n\t-moz-box-shadow: 10px 7px 11px -5px rgba(115, 115, 115, 0.18);\r\n\tbox-shadow: 10px 7px 11px -5px rgba(115, 115, 115, 0.18);\r\n\t */\r\n}\r\n\r\n.proName {\r\n\tmargin-left: 2%;\r\n\tfloat: left;\r\n\tmargin-top: 10px;\r\n\theight: 45px;\r\n\tcolor: #2571bb;\r\n\tfont-family: Poppins;\r\n\tfont-size: 30px;\r\n\tfont-weight: 600;\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.proName1 {\r\n\tmargin-left: 2%;\r\n\tfloat: left;\r\n\tmargin-top: 05px;\r\n\theight: 45px;\r\n\tcolor: #2571bb;\r\n\tfont-family: arial;\r\n\tfont-size: 15px;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.proName2 {\r\n\tmargin-left: 2%;\r\n\tfloat: left;\r\n\t/* margin-top: 15px; */\r\n\theight: 45px;\r\n\tcolor: #8c8e90;\r\n\tfont-family: Arial;\r\n\tfont-size: 10px;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.proName3 {\r\n\tmargin-right: 15%;\r\n\tfloat: right;\r\n\t/* margin-top: 15px; */\r\n\theight: 45px;\r\n\tcolor: #8c8e90;\r\n\tfont-family: Arial;\r\n\tfont-size: 10px;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.proName4 {\r\n\tmargin-right: -22%;\r\n    float: right;\r\n    height: 45px;\r\n    color: #4a96d2;\r\n    font-family: Arial;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n}\r\n\r\n.proName5 {\r\n\tmargin-right: -1%;\r\n    float: right;\r\n    height: 45px;\r\n    color: #4a96d2;\r\n    font-family: Arial;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n}\r\n\r\nhr {\r\n    margin-top: 32px !important;\r\n    margin-bottom: 1rem;\r\n    border-top: 1px solid #4a96d2;\r\n    border-width: 02px;\r\n}\r\n\r\n/* .logo {\r\n\tfloat: left;\r\n\tmargin-top: 05px;\r\n\theight: 10px;\r\n} */\r\n\r\n.icon {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\twidth: 21px;\r\n    height: 21px;\r\n    padding-right: 5px;\r\n    margin-right: 1px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tbW9uL0hlYWRlci9IZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLE1BQU07Q0FDTixRQUFRO0NBQ1IsUUFBUTtDQUNSLFlBQVk7O0NBRVo7OztHQUdFO0FBQ0g7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osY0FBYztDQUNkLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osY0FBYztDQUNkLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUdBO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFHQTtDQUNDLGtCQUFrQjtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUdBO0NBQ0MsaUJBQWlCO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7R0FJRzs7QUFHSDtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osV0FBVztJQUNSLFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL0NvbW1vbi9IZWFkZXIvSGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuXHRoZWlnaHQ6IDY1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwJTtcclxuXHRyaWdodDogMDtcclxuXHR6LWluZGV4OiA5OTk7XHJcblx0XHJcblx0LyogLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDdweCAxMXB4IC01cHggcmdiYSgxMTUsIDExNSwgMTE1LCAwLjE4KTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDEwcHggN3B4IDExcHggLTVweCByZ2JhKDExNSwgMTE1LCAxMTUsIDAuMTgpO1xyXG5cdGJveC1zaGFkb3c6IDEwcHggN3B4IDExcHggLTVweCByZ2JhKDExNSwgMTE1LCAxMTUsIDAuMTgpO1xyXG5cdCAqL1xyXG59XHJcblxyXG4ucHJvTmFtZSB7XHJcblx0bWFyZ2luLWxlZnQ6IDIlO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0aGVpZ2h0OiA0NXB4O1xyXG5cdGNvbG9yOiAjMjU3MWJiO1xyXG5cdGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ucHJvTmFtZTEge1xyXG5cdG1hcmdpbi1sZWZ0OiAyJTtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW4tdG9wOiAwNXB4O1xyXG5cdGhlaWdodDogNDVweDtcclxuXHRjb2xvcjogIzI1NzFiYjtcclxuXHRmb250LWZhbWlseTogYXJpYWw7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5wcm9OYW1lMiB7XHJcblx0bWFyZ2luLWxlZnQ6IDIlO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdC8qIG1hcmdpbi10b3A6IDE1cHg7ICovXHJcblx0aGVpZ2h0OiA0NXB4O1xyXG5cdGNvbG9yOiAjOGM4ZTkwO1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuXHRmb250LXNpemU6IDEwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuXHJcbi5wcm9OYW1lMyB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNSU7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdC8qIG1hcmdpbi10b3A6IDE1cHg7ICovXHJcblx0aGVpZ2h0OiA0NXB4O1xyXG5cdGNvbG9yOiAjOGM4ZTkwO1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuXHRmb250LXNpemU6IDEwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuXHJcbi5wcm9OYW1lNCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAtMjIlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgY29sb3I6ICM0YTk2ZDI7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuLnByb05hbWU1IHtcclxuXHRtYXJnaW4tcmlnaHQ6IC0xJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGNvbG9yOiAjNGE5NmQyO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuXHJcbmhyIHtcclxuICAgIG1hcmdpbi10b3A6IDMycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzRhOTZkMjtcclxuICAgIGJvcmRlci13aWR0aDogMDJweDtcclxufVxyXG5cclxuLyogLmxvZ28ge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi10b3A6IDA1cHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG59ICovXHJcblxyXG5cclxuLmljb24ge1xyXG5cdHdpZHRoOiA0MHB4O1xyXG5cdGhlaWdodDogNDBweDtcclxuXHR3aWR0aDogMjFweDtcclxuICAgIGhlaWdodDogMjFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMXB4XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Common/Header/Header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Common/Header/Header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
// import { Component, OnInit, ViewChild } from "@angular/core";
// @Component({
//   selector: "app-header",
//   templateUrl: "./Header.component.html"
// })
// export class HeaderComponent {
//   constructor() {}
// }


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Common/Header/Header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Header.component.css */ "./src/app/Common/Header/Header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
const apiUrl = "/api";
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
    ;
    extractData(res) {
        let body = res;
        return body || {};
    }
    getMembers() {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getMember(id) {
        const url = `${apiUrl}/getMember/${id}`;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postMember(data) {
        const url = `${apiUrl}/saveMember/`;
        console.log(url);
        console.log('hereeeeeeeee');
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateMember(id, data) {
        const url = `${apiUrl}/updateMember/${id}`;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteMember(id) {
        const url = `${apiUrl}/deleteMember/${id}`;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ltss-webapp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _member_member_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./member/member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./member-detail/member-detail.component */ "./src/app/member-detail/member-detail.component.ts");
/* harmony import */ var _member_create_member_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./member-create/member-create.component */ "./src/app/member-create/member-create.component.ts");
/* harmony import */ var _member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./member-edit/member-edit.component */ "./src/app/member-edit/member-edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _Common_Header_Header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Common/Header/Header.component */ "./src/app/Common/Header/Header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");















// import { MatDatepickerModule } from '@angular/material/datepicker';
const appRoutes = [
    {
        path: 'members',
        component: _member_member_component__WEBPACK_IMPORTED_MODULE_4__["MemberComponent"],
        data: { title: 'Member List' }
    },
    {
        path: 'member-details/:id',
        component: _member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__["MemberDetailComponent"],
        data: { title: 'Member Details' }
    },
    {
        path: 'member-create',
        component: _member_create_member_create_component__WEBPACK_IMPORTED_MODULE_6__["MemberCreateComponent"],
        data: { title: 'Create Member' }
    },
    {
        path: 'member-edit/:id',
        component: _member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_7__["MemberEditComponent"],
        data: { title: 'Edit Member' }
    },
    {
        path: '',
        redirectTo: '/members',
        pathMatch: 'full'
    }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _Common_Header_Header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _member_member_component__WEBPACK_IMPORTED_MODULE_4__["MemberComponent"],
            _member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__["MemberDetailComponent"],
            _member_create_member_create_component__WEBPACK_IMPORTED_MODULE_6__["MemberCreateComponent"],
            _member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_7__["MemberEditComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/member-create/member-create.component.css":
/*!***********************************************************!*\
  !*** ./src/app/member-create/member-create.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\r\n\tmin-width: 150px;\r\n\tmax-width: 500px;\r\n\twidth: 100%;\r\n}\r\n.example-full-width {\r\n\twidth: 95%;\r\n\tpadding-left: 20px;\r\n\tmargin-top: 60px;\r\n}\r\n.example-full-width:nth-last-child() {\r\n\tmargin-bottom: 10px;\r\n}\r\n.button-row {\r\n\tmargin: 10px 0;\r\n}\r\n.example-container {\r\n\tbackground-color: white;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmax-width: 90%;\r\n\toverflow: auto;\r\n\tborder-top-right-radius: 5px;\r\n\tborder-top-left-radius: 5px;\r\n\tpadding: 10px;\r\n\tmargin-top: 10px;\r\n}\r\n.buttonExport {\r\n\twidth: 221px;\r\n\tbackground-color: white;\r\n\tpadding: 0.5em 0.5em 0.5em 1em;\r\n}\r\n.buttonExport.minimal {\r\n\tborder: 1px solid;\r\n\tborder-radius: 30px;\r\n\tfloat: right;\r\n\tbackground-image: linear-gradient(45deg, transparent 50%, gray 50%),\r\n\t\tlinear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);\r\n\tbackground-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\r\n\tbackground-size: 5px 5px, 5px 5px, 1px 1.5em;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n[type=\"date\"] {\r\n\tbackground: #faf9fe url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50%\r\n\t\tno-repeat;\r\n}\r\n[type=\"date\"]::-webkit-inner-spin-button {\r\n\tdisplay: none;\r\n}\r\n[type=\"date\"]::-webkit-calendar-picker-indicator {\r\n\topacity: 0;\r\n}\r\n.textboxClass {\r\n\twidth: 100%;\r\n\tborder-radius: 34px;\r\n\tborder: 1px solid #dddfe0;\r\n\tbackground: #faf9fe;\r\n\tpadding: 8px;\r\n\tmargin-top: 5px;\r\n}\r\n.textboxClassDate {\r\n\twidth: 30%;\r\n\tborder-radius: 34px;\r\n\tborder: 1px solid #dddfe0;\r\n\tpadding: 8px;\r\n\tmargin-top: 5px;\r\n}\r\n.errorClass {\r\n\tcolor: red;\r\n\tfont-size: 12px;\r\n\tmargin-left: 6px;\r\n}\r\n.inputName {\r\n\tpadding: 5px;\r\n}\r\n.validateBtn {\r\n\tmargin-right: 40px;\r\n\tbackground-color: #2571bb;\r\n\tcolor: white;\r\n\tpadding: 2px 12px 2px 12px;\r\n\tborder-radius: 50px;\r\n\tborder: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyLWNyZWF0ZS9tZW1iZXItY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjtBQUNBO0NBQ0MsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2QsY0FBYztDQUNkLDRCQUE0QjtDQUM1QiwyQkFBMkI7Q0FDM0IsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsWUFBWTtDQUNaLHVCQUF1QjtDQUN2Qiw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaOzJGQUMwRjtDQUMxRixtSEFBbUg7Q0FDbkgsNENBQTRDO0NBQzVDLDRCQUE0QjtBQUM3QjtBQUVBO0NBQ0M7V0FDVTtBQUNYO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLFVBQVU7QUFDWDtBQUVBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxVQUFVO0NBQ1YsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osZUFBZTtBQUNoQjtBQUVBO0NBQ0MsVUFBVTtDQUNWLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLFlBQVk7QUFDYjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixXQUFXO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXItY3JlYXRlL21lbWJlci1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG5cdG1pbi13aWR0aDogMTUwcHg7XHJcblx0bWF4LXdpZHRoOiA1MDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuXHR3aWR0aDogOTUlO1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHRtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGg6bnRoLWxhc3QtY2hpbGQoKSB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uYnV0dG9uLXJvdyB7XHJcblx0bWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWF4LXdpZHRoOiA5MCU7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uRXhwb3J0IHtcclxuXHR3aWR0aDogMjIxcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0cGFkZGluZzogMC41ZW0gMC41ZW0gMC41ZW0gMWVtO1xyXG59XHJcblxyXG4uYnV0dG9uRXhwb3J0Lm1pbmltYWwge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkO1xyXG5cdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNTAlLCBncmF5IDUwJSksXHJcblx0XHRsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBncmF5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjY2NjKTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgMnB4KSwgY2FsYygxMDAlIC0gMi41ZW0pIDAuNWVtO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogNXB4IDVweCwgNXB4IDVweCwgMXB4IDEuNWVtO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcblt0eXBlPVwiZGF0ZVwiXSB7XHJcblx0YmFja2dyb3VuZDogI2ZhZjlmZSB1cmwoaHR0cHM6Ly9jZG4xLmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvY2NfbW9ub19pY29uX3NldC9ibGFja3MvMTZ4MTYvY2FsZW5kYXJfMi5wbmcpIDk3JSA1MCVcclxuXHRcdG5vLXJlcGVhdDtcclxufVxyXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi50ZXh0Ym94Q2xhc3Mge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZGZlMDtcclxuXHRiYWNrZ3JvdW5kOiAjZmFmOWZlO1xyXG5cdHBhZGRpbmc6IDhweDtcclxuXHRtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi50ZXh0Ym94Q2xhc3NEYXRlIHtcclxuXHR3aWR0aDogMzAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZGZlMDtcclxuXHRwYWRkaW5nOiA4cHg7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZXJyb3JDbGFzcyB7XHJcblx0Y29sb3I6IHJlZDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLmlucHV0TmFtZSB7XHJcblx0cGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4udmFsaWRhdGVCdG4ge1xyXG5cdG1hcmdpbi1yaWdodDogNDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjU3MWJiO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiAycHggMTJweCAycHggMTJweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdGJvcmRlcjogMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/member-create/member-create.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/member-create/member-create.component.ts ***!
  \**********************************************************/
/*! exports provided: MemberCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCreateComponent", function() { return MemberCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let MemberCreateComponent = class MemberCreateComponent {
    constructor(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.memberid = '';
        this.memfirstname = '';
        this.memlastname = '';
        this.assesstype = '';
        this.status = '';
        this.cntdate = '';
        this.locofvis = '';
        this.cntentity = '';
        this.cntname = '';
        this.intdispmem = '';
        this.elgbleissue = '';
        this.memserve = '';
        this.servegap = '';
        this.phycond = '';
        this.phychange = '';
        this.medappnt = '';
        this.phyenv = '';
        this.moodemo = '';
        this.recfall = '';
        this.servcare = '';
        this.memrisk = '';
        this.restintrv = '';
        this.memresult = '';
        this.othtopic = '';
        this.nursename = '';
    }
    ngOnInit() {
        localStorage.setItem('memberCreate', '2');
        localStorage.removeItem('member');
        this.memberForm = this.formBuilder.group({
            memberid: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            memfirstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            memlastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            assesstype: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cntdate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            locofvis: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cntentity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cntname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            intdispmem: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            elgbleissue: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            memserve: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            servegap: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phycond: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phychange: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            medappnt: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phyenv: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            moodemo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            recfall: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            servcare: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            memrisk: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            restintrv: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            memresult: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            othtopic: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nursename: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    onFormSubmit(form) {
        this.api.postMember(form).subscribe((res) => {
            let id = res['_id'];
            this.router.navigate(['/member-details', id]);
        }, (err) => {
            console.log(err);
        });
    }
};
MemberCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
MemberCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/member-create/member-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-create.component.css */ "./src/app/member-create/member-create.component.css")).default]
    })
], MemberCreateComponent);



/***/ }),

/***/ "./src/app/member-detail/member-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/member-detail/member-detail.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n\tmax-width: 500px;\r\n}\r\n.button-row {\r\n\tmargin: 10px 0;\r\n}\r\n.example-form {\r\n\tmin-width: 150px;\r\n\tmax-width: 500px;\r\n\twidth: 100%;\r\n}\r\n.example-full-width {\r\n\twidth: 100%;\r\n}\r\n.example-full-width:nth-last-child() {\r\n\tmargin-bottom: 10px;\r\n}\r\n.button-row {\r\n\tmargin-top: 35px;\r\n\tfloat: right;\r\n\twidth: 20%;\r\n}\r\n.example-container {\r\n\tbackground-color: white;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmax-width: 90%;\r\n\toverflow: auto;\r\n\tborder-top-right-radius: 5px;\r\n\tborder-top-left-radius: 5px;\r\n\tpadding: 10px;\r\n\tmargin-top: 10px;\r\n}\r\n.buttonExport {\r\n\twidth: 221px;\r\n\tbackground-color: white;\r\n\tpadding: 0.5em 0.5em 0.5em 1em;\r\n}\r\n.buttonExport.minimal {\r\n\tborder: 1px solid;\r\n\tborder-radius: 30px;\r\n\tfloat: right;\r\n\tbackground-image: linear-gradient(45deg, transparent 50%, gray 50%),\r\n\t\tlinear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);\r\n\tbackground-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\r\n\tbackground-size: 5px 5px, 5px 5px, 1px 1.5em;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n/* \r\n.buttonExport.minimal:focus {\r\n\tbackground-image: linear-gradient(45deg, #2cade0 50%, transparent 50%),\r\n\t\tlinear-gradient(135deg, transparent 50%, #2cade0 50%), linear-gradient(to right, #ccc, #ccc);\r\n\tbackground-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em;\r\n\tbackground-size: 5px 5px, 5px 5px, 1px 1.5em;\r\n\tbackground-repeat: no-repeat;\r\n\tborder-color: #2cade0;\r\n\toutline: 0;\r\n} */\r\n.mat-form-field-infix {\r\n\twidth: 110px !important;\r\n}\r\n.errorClass {\r\n\tcolor: red;\r\n\tfont-size: 12px;\r\n}\r\n.textboxClass {\r\n\twidth: 100%;\r\n\tborder-radius: 34px;\r\n\tborder: 1px solid #dddfe0;\r\n\tbackground: #faf9fe;\r\n\tpadding: 8px;\r\n\tmargin-top: 5px;\r\n}\r\n.inputName {\r\n\tpadding: 5px;\r\n}\r\n.mat-raised-button[disabled]:not([class*=mat-elevation-z]) {\r\n\tbox-shadow: 0 0 0 0 rgba(0, 0, 0, .2), 0 0 0 0 rgba(0, 0, 0, .14), 0 0 0 0 rgba(0, 0, 0, .12);\r\n\tborder-radius: 22px;\r\n\tpadding-left: 30px;\r\n\tpadding-right: 30px;\r\n}\r\n.profile {\r\n\tmargin-top: 25%;\r\n\tmargin-left: 0%;\r\n\ttext-align: center;\r\n}\r\n.icon {\r\n\twidth: 45%;\r\n\theight: 125px;\r\n}\r\n.editBox {\r\n\twidth: 90%;\r\n\tborder: 1px solid #3c8bc6;\r\n\theight: 250px;\r\n\tborder-radius: 5px;\r\n}\r\n/* table {\r\n\tborder: 1px solid #3c8bc6;\r\n\twidth: 95%;\r\n}\r\n\r\ntd {\r\n\tborder: 1px solid #3c8bc6;\r\n\ttext-align: center;\r\n\tpadding: 25px;\r\n} */\r\n.contentHead {\r\n\tfont-size: 12px;\r\n\tcolor: #a5a4a4;\r\n}\r\n.contentHeadQus {\r\n\tfont-size: 16px;\r\n\tcolor: #131212;\r\n}\r\n.contentResult {\r\n\tfont-size: 18px;\r\n}\r\n.contentResultAns {\r\n\tfont-size: 18px;\r\n\tcolor: #3c8bc6;\r\n\tmargin-left: 27px;\r\n}\r\n.editBtn {\r\n\tbackground-color: #24d1a1;\r\n\tcolor: white;\r\n\tpadding: 8px 15px 8px 15px;\r\n\tborder-radius: 50px;\r\n\tborder: 0px;\r\n}\r\n.deleteBtn {\r\n\tmargin-left: 10px;\r\n\tbackground-color: #ee5252;\r\n\tcolor: white;\r\n\tpadding: 8px 15px 8px 15px;\r\n\tborder-radius: 50px;\r\n\tborder: 0px;\r\n}\r\n.validateBtn {\r\n\tbackground-color: #2571bb;\r\n\tcolor: white;\r\n\tpadding: 8px 15px 8px 15px;\r\n\tborder-radius: 50px;\r\n\tborder: 0px;\r\n}\r\n.proName {\r\n\tmargin-left: 1%;\r\n    float: left;\r\n    margin-top: -7px;\r\n    height: 45px;\r\n    font-family: arial;\r\n    font-size: 01;\r\n    font-weight: 50;\r\n}\r\n.proName1 {\r\n\tmargin-left: 1%;\r\n    float: left;\r\n    margin-top: -7px;\r\n\theight: 45px;\r\n\tcolor: #4a96d2;\r\n    font-family: arial;\r\n    font-size: 01;\r\n    font-weight: 50;\r\n}\r\n#customers {\r\n\tfont-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n\tborder-collapse: collapse;\r\n\twidth: 100%;\r\n\tborder:1px #2571bb solid;\r\n  }\r\n#tableth {\r\n\tpadding-top: 12px;\r\n\tpadding-bottom: 12px;\r\n\ttext-align: left;\r\n\tbackground-color: #4a96d2;\r\n\tcolor: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyLWRldGFpbC9tZW1iZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLFVBQVU7QUFDWDtBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsY0FBYztDQUNkLGNBQWM7Q0FDZCw0QkFBNEI7Q0FDNUIsMkJBQTJCO0NBQzNCLGFBQWE7Q0FDYixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsOEJBQThCO0FBQy9CO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWjsyRkFDMEY7Q0FDMUYsbUhBQW1IO0NBQ25ILDRDQUE0QztDQUM1Qyw0QkFBNEI7QUFDN0I7QUFDQTs7Ozs7Ozs7O0dBU0c7QUFFSDtDQUNDLHVCQUF1QjtBQUN4QjtBQUVBO0NBQ0MsVUFBVTtDQUNWLGVBQWU7QUFDaEI7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osZUFBZTtBQUNoQjtBQUVBO0NBQ0MsWUFBWTtBQUNiO0FBRUE7Q0FDQyw2RkFBNkY7Q0FDN0YsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLGVBQWU7Q0FDZixlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtBQUNkO0FBRUE7Q0FDQyxVQUFVO0NBQ1YseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7QUFFQTs7Ozs7Ozs7O0dBU0c7QUFFSDtDQUNDLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsV0FBVztBQUNaO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFdBQVc7QUFDWjtBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFdBQVc7QUFDWjtBQUNBO0NBQ0MsZUFBZTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUVBO0NBQ0MsZUFBZTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7Q0FDbkIsWUFBWTtDQUNaLGNBQWM7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtDQUNDLHlEQUF5RDtDQUN6RCx5QkFBeUI7Q0FDekIsV0FBVztDQUNYLHdCQUF3QjtFQUN2QjtBQUVBO0NBQ0QsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLFlBQVk7RUFDWCIsImZpbGUiOiJzcmMvYXBwL21lbWJlci1kZXRhaWwvbWVtYmVyLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcblx0bWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG4uYnV0dG9uLXJvdyB7XHJcblx0bWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG5cdG1pbi13aWR0aDogMTUwcHg7XHJcblx0bWF4LXdpZHRoOiA1MDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKCkge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmJ1dHRvbi1yb3cge1xyXG5cdG1hcmdpbi10b3A6IDM1cHg7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1heC13aWR0aDogOTAlO1xyXG5cdG92ZXJmbG93OiBhdXRvO1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbkV4cG9ydCB7XHJcblx0d2lkdGg6IDIyMXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDAuNWVtIDAuNWVtIDAuNWVtIDFlbTtcclxufVxyXG5cclxuLmJ1dHRvbkV4cG9ydC5taW5pbWFsIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZDtcclxuXHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JheSA1MCUpLFxyXG5cdFx0bGluZWFyLWdyYWRpZW50KDEzNWRlZywgZ3JheSA1MCUsIHRyYW5zcGFyZW50IDUwJSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgI2NjYyk7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDIuNWVtKSAwLjVlbTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDVweCA1cHgsIDVweCA1cHgsIDFweCAxLjVlbTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi8qIFxyXG4uYnV0dG9uRXhwb3J0Lm1pbmltYWw6Zm9jdXMge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzJjYWRlMCA1MCUsIHRyYW5zcGFyZW50IDUwJSksXHJcblx0XHRsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA1MCUsICMyY2FkZTAgNTAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjY2NjKTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAxNXB4KSAxZW0sIGNhbGMoMTAwJSAtIDIwcHgpIDFlbSwgY2FsYygxMDAlIC0gMi41ZW0pIDAuNWVtO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogNXB4IDVweCwgNXB4IDVweCwgMXB4IDEuNWVtO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMmNhZGUwO1xyXG5cdG91dGxpbmU6IDA7XHJcbn0gKi9cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcblx0d2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lcnJvckNsYXNzIHtcclxuXHRjb2xvcjogcmVkO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRleHRib3hDbGFzcyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyLXJhZGl1czogMzRweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZmUwO1xyXG5cdGJhY2tncm91bmQ6ICNmYWY5ZmU7XHJcblx0cGFkZGluZzogOHB4O1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmlucHV0TmFtZSB7XHJcblx0cGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuXHRib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgLjIpLCAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAwIDAgMCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcblx0Ym9yZGVyLXJhZGl1czogMjJweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG5cdG1hcmdpbi10b3A6IDI1JTtcclxuXHRtYXJnaW4tbGVmdDogMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcblx0d2lkdGg6IDQ1JTtcclxuXHRoZWlnaHQ6IDEyNXB4O1xyXG59XHJcblxyXG4uZWRpdEJveCB7XHJcblx0d2lkdGg6IDkwJTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjM2M4YmM2O1xyXG5cdGhlaWdodDogMjUwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4vKiB0YWJsZSB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzNjOGJjNjtcclxuXHR3aWR0aDogOTUlO1xyXG59XHJcblxyXG50ZCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzNjOGJjNjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZzogMjVweDtcclxufSAqL1xyXG5cclxuLmNvbnRlbnRIZWFkIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Y29sb3I6ICNhNWE0YTQ7XHJcbn1cclxuXHJcbi5jb250ZW50SGVhZFF1cyB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGNvbG9yOiAjMTMxMjEyO1xyXG59XHJcblxyXG4uY29udGVudFJlc3VsdCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY29udGVudFJlc3VsdEFucyB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGNvbG9yOiAjM2M4YmM2O1xyXG5cdG1hcmdpbi1sZWZ0OiAyN3B4O1xyXG59XHJcblxyXG4uZWRpdEJ0biB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI0ZDFhMTtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0cGFkZGluZzogOHB4IDE1cHggOHB4IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRib3JkZXI6IDBweDtcclxufVxyXG5cclxuLmRlbGV0ZUJ0biB7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlNTI1MjtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0cGFkZGluZzogOHB4IDE1cHggOHB4IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRib3JkZXI6IDBweDtcclxufVxyXG5cclxuLnZhbGlkYXRlQnRuIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjU3MWJiO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiA4cHggMTVweCA4cHggMTVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdGJvcmRlcjogMHB4O1xyXG59XHJcbi5wcm9OYW1lIHtcclxuXHRtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDAxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwO1xyXG59XHJcblxyXG4ucHJvTmFtZTEge1xyXG5cdG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuXHRoZWlnaHQ6IDQ1cHg7XHJcblx0Y29sb3I6ICM0YTk2ZDI7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXNpemU6IDAxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwO1xyXG59XHJcbiNjdXN0b21lcnMge1xyXG5cdGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyOjFweCAjMjU3MWJiIHNvbGlkO1xyXG4gIH1cclxuXHJcbiAgI3RhYmxldGgge1xyXG5cdHBhZGRpbmctdG9wOiAxMnB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzRhOTZkMjtcclxuXHRjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/member-detail/member-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/member-detail/member-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




let MemberDetailComponent = class MemberDetailComponent {
    constructor(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.member = {};
    }
    getMemberDetails(id) {
        this.api.getMember(id)
            .subscribe(data => {
            console.log(data);
            this.member = data;
        });
    }
    deleteMember(id) {
        this.api.deleteMember(id)
            .subscribe(res => {
            this.router.navigate(['/members']);
        }, (err) => {
            console.log(err);
        });
    }
    ngOnInit() {
        this.getMemberDetails(this.route.snapshot.params['id']);
    }
};
MemberDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MemberDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/member-detail/member-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-detail.component.css */ "./src/app/member-detail/member-detail.component.css")).default]
    })
], MemberDetailComponent);



/***/ }),

/***/ "./src/app/member-edit/member-edit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/member-edit/member-edit.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\r\n\tmin-width: 150px;\r\n\tmax-width: 500px;\r\n\twidth: 100%;\r\n}\r\n.example-full-width {\r\n\twidth: 95%;\r\n\tpadding-left: 20px;\r\n\tmargin-top: 60px;\r\n}\r\n.example-full-width:nth-last-child() {\r\n\tmargin-bottom: 10px;\r\n}\r\n.button-row {\r\n\tmargin: 10px 0;\r\n}\r\n.example-container {\r\n\tbackground-color: white;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmax-width: 90%;\r\n\toverflow: auto;\r\n\tborder-top-right-radius: 5px;\r\n\tborder-top-left-radius: 5px;\r\n\tpadding: 10px;\r\n\tmargin-top: 10px;\r\n}\r\n.buttonExport {\r\n\twidth: 221px;\r\n\tbackground-color: white;\r\n\tpadding: 0.5em 0.5em 0.5em 1em;\r\n}\r\n.buttonExport.minimal {\r\n\tborder: 1px solid;\r\n\tborder-radius: 30px;\r\n\tfloat: right;\r\n\tbackground-image: linear-gradient(45deg, transparent 50%, gray 50%),\r\n\t\tlinear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);\r\n\tbackground-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\r\n\tbackground-size: 5px 5px, 5px 5px, 1px 1.5em;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n[type=\"date\"] {\r\n\tbackground: #faf9fe url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50%\r\n\t\tno-repeat;\r\n}\r\n[type=\"date\"]::-webkit-inner-spin-button {\r\n\tdisplay: none;\r\n}\r\n[type=\"date\"]::-webkit-calendar-picker-indicator {\r\n\topacity: 0;\r\n}\r\n.textboxClass {\r\n\twidth: 100%;\r\n\tborder-radius: 34px;\r\n\tborder: 1px solid #dddfe0;\r\n\tbackground: #faf9fe;\r\n\tpadding: 8px;\r\n\tmargin-top: 5px;\r\n}\r\n.textboxClassDate {\r\n\twidth: 30%;\r\n\tborder-radius: 34px;\r\n\tborder: 1px solid #dddfe0;\r\n\tpadding: 8px;\r\n\tmargin-top: 5px;\r\n}\r\n.errorClass {\r\n\tcolor: red;\r\n\tfont-size: 12px;\r\n\tmargin-left: 6px;\r\n}\r\n.inputName {\r\n\tpadding: 5px;\r\n}\r\n.validateBtn {\r\n\tmargin-right: 40px;\r\n\tbackground-color: #2571bb;\r\n\tcolor: white;\r\n\tpadding: 2px 12px 2px 12px;\r\n\tborder-radius: 50px;\r\n\tborder: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyLWVkaXQvbWVtYmVyLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsNEJBQTRCO0NBQzVCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxZQUFZO0NBQ1osdUJBQXVCO0NBQ3ZCLDhCQUE4QjtBQUMvQjtBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1o7MkZBQzBGO0NBQzFGLG1IQUFtSDtDQUNuSCw0Q0FBNEM7Q0FDNUMsNEJBQTRCO0FBQzdCO0FBRUE7Q0FDQztXQUNVO0FBQ1g7QUFDQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGVBQWU7QUFDaEI7QUFFQTtDQUNDLFVBQVU7Q0FDVixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxVQUFVO0NBQ1YsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsWUFBWTtBQUNiO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFdBQVc7QUFDWiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci1lZGl0L21lbWJlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuXHRtaW4td2lkdGg6IDE1MHB4O1xyXG5cdG1heC13aWR0aDogNTAwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcblx0d2lkdGg6IDk1JTtcclxuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0bWFyZ2luLXRvcDogNjBweDtcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKCkge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmJ1dHRvbi1yb3cge1xyXG5cdG1hcmdpbjogMTBweCAwO1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1heC13aWR0aDogOTAlO1xyXG5cdG92ZXJmbG93OiBhdXRvO1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbkV4cG9ydCB7XHJcblx0d2lkdGg6IDIyMXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdHBhZGRpbmc6IDAuNWVtIDAuNWVtIDAuNWVtIDFlbTtcclxufVxyXG5cclxuLmJ1dHRvbkV4cG9ydC5taW5pbWFsIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZDtcclxuXHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JheSA1MCUpLFxyXG5cdFx0bGluZWFyLWdyYWRpZW50KDEzNWRlZywgZ3JheSA1MCUsIHRyYW5zcGFyZW50IDUwJSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgI2NjYyk7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDIuNWVtKSAwLjVlbTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDVweCA1cHgsIDVweCA1cHgsIDFweCAxLjVlbTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5bdHlwZT1cImRhdGVcIl0ge1xyXG5cdGJhY2tncm91bmQ6ICNmYWY5ZmUgdXJsKGh0dHBzOi8vY2RuMS5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2NjX21vbm9faWNvbl9zZXQvYmxhY2tzLzE2eDE2L2NhbGVuZGFyXzIucG5nKSA5NyUgNTAlXHJcblx0XHRuby1yZXBlYXQ7XHJcbn1cclxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuXHRvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4udGV4dGJveENsYXNzIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXItcmFkaXVzOiAzNHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGRmZTA7XHJcblx0YmFja2dyb3VuZDogI2ZhZjlmZTtcclxuXHRwYWRkaW5nOiA4cHg7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4udGV4dGJveENsYXNzRGF0ZSB7XHJcblx0d2lkdGg6IDMwJTtcclxuXHRib3JkZXItcmFkaXVzOiAzNHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGRmZTA7XHJcblx0cGFkZGluZzogOHB4O1xyXG5cdG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmVycm9yQ2xhc3Mge1xyXG5cdGNvbG9yOiByZWQ7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5pbnB1dE5hbWUge1xyXG5cdHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnZhbGlkYXRlQnRuIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI1NzFiYjtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0cGFkZGluZzogMnB4IDEycHggMnB4IDEycHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRib3JkZXI6IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/member-edit/member-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/member-edit/member-edit.component.ts ***!
  \******************************************************/
/*! exports provided: MemberEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function() { return MemberEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let MemberEditComponent = class MemberEditComponent {
    constructor(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = '';
        this.memberid = '';
        this.memfirstname = '';
        this.memlastname = '';
        this.assesstype = '';
        this.status = '';
        this.cntdate = '';
        this.locofvis = '';
        this.cntentity = '';
        this.cntname = '';
        this.intdispmem = '';
        this.elgbleissue = '';
        this.memserve = '';
        this.servegap = '';
        this.phycond = '';
        this.phychange = '';
        this.medappnt = '';
        this.phyenv = '';
        this.moodemo = '';
        this.recfall = '';
        this.servcare = '';
        this.memrisk = '';
        this.restintrv = '';
        this.memresult = '';
        this.othtopic = '';
        this.nursename = '';
    }
    ngOnInit() {
        this.getMember(this.route.snapshot.params['id']);
        this.memberForm = this.formBuilder.group({
            memberid: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            memfirstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            memlastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            assesstype: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            status: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cntdate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            locofvis: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cntentity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cntname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            intdispmem: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            elgbleissue: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            memserve: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            servegap: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phycond: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phychange: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            medappnt: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phyenv: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            moodemo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            recfall: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            servcare: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            memrisk: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            restintrv: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            memresult: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            othtopic: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nursename: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    getMember(id) {
        this.api.getMember(id).subscribe((data) => {
            console.log(data);
            this.id = data._id;
            this.memberForm.setValue({
                memberid: data.memberid,
                memfirstname: data.memfirstname,
                memlastname: data.memlastname,
                cntdate: data.cntdate,
                locofvis: data.locofvis,
                cntentity: data.cntentity,
                cntname: data.cntname,
                intdispmem: data.intdispmem,
                elgbleissue: data.elgbleissue,
                memserve: data.memserve,
                servegap: data.servegap,
                phycond: data.phycond,
                phychange: data.phychange,
                medappnt: data.medappnt,
                phyenv: data.phyenv,
                moodemo: data.moodemo,
                recfall: data.recfall,
                servcare: data.servcare,
                memrisk: data.memrisk,
                restintrv: data.restintrv,
                memresult: data.memresult,
                othtopic: data.othtopic,
                nursename: data.nursename,
                assesstype: data.assesstype,
                status: data.status
            });
        });
    }
    onFormSubmit(form) {
        this.api.updateMember(this.id, this.memberForm.value).subscribe((res) => {
            let id = res['_id'];
            this.router.navigate(['/member-details', id]);
        }, (err) => {
            console.log(err);
        });
    }
    memberDetails() {
        this.router.navigate(['/member-details', this.id]);
    }
};
MemberEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
MemberEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/member-edit/member-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-edit.component.css */ "./src/app/member-edit/member-edit.component.css")).default]
    })
], MemberEditComponent);



/***/ }),

/***/ "./src/app/member/member.component.css":
/*!*********************************************!*\
  !*** ./src/app/member/member.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmax-height: 390px;\r\n\tmax-width: 100%;\r\n\toverflow: auto;\r\n\tborder-top-right-radius: 5px;\r\n\tborder-top-left-radius: 5px;\r\n}\r\n.memberid-col {\r\n\tflex: 0 0 100px !important;\r\n\twhite-space: unset !important;\r\n}\r\n.button-row {\r\n\tmargin-top: 20px;\r\n}\r\n.container {\r\n\twidth: 90%;\r\n\tpadding-right: 0px !important;\r\n\t/* padding-left: 113px; */\r\n\tmargin-right: auto;\r\n\tmargin-left: 0px !important;\r\n}\r\n.nav-tabs {\r\n\tborder-bottom: 1px solid #d5d5d9 !important;\r\n\twidth: 93%;\r\n}\r\n.navbar a:hover {\r\n\tbackground-color: #ddd;\r\n\tcolor: #2571bb;\r\n\tborder-top-left-radius: .25rem;\r\n\tborder-top-right-radius: .25rem;\r\n\twidth: 88%;\r\n}\r\n.nav-tabs .nav-link {\r\n\tborder-top-left-radius: .25rem;\r\n\tborder-top-right-radius: .25rem;\r\n}\r\n.nav-tabs .nav-link {\r\n\tborder-top-left-radius: .25rem;\r\n\tborder-top-right-radius: .25rem;\r\n}\r\n.nav-tabs .nav-link:hover {\r\n\tborder-color: #e6ebf1 #e6ebf1 #2571bb #e6ebf1 !important;\r\n\tborder-top-left-radius: .25rem;\r\n\tborder-top-right-radius: .25rem;\r\n}\r\n.nav-tabs .nav-link.active {\r\n\tcolor: black;\r\n\tbackground-color: #e6ebf1;\r\n\tborder-color: #e6ebf1 #e6ebf1 #2571bb #e6ebf1 !important;\r\n\tborder-bottom: 2px solid #2571bb;\r\n}\r\na {\r\n\tcolor: #495057;\r\n}\r\n.searchbox {\r\n\tborder: 0px solid #ccc;\r\n\tbackground-image: url('icon.png');\r\n\tbackground-position: 10px;\r\n\tbackground-size: 20px 20px;\r\n\tbackground-repeat: no-repeat;\r\n\tpadding: 20px 20px 20px 40px;\r\n\ttransition: width 0.4s ease-in-out;\r\n}\r\ntr.mat-header-row {\r\n\theight: 56px;\r\n\tbackground-color: #e6ebf1;\r\n\tcolor: #2571bb !important;\r\n}\r\nth.mat-header-cell {\r\n\tcolor: #2571bb;\r\n}\r\nselect {\r\n\t/* styling */\r\n\tbackground-color: white;\r\n\tborder-radius: 4px;\r\n\tdisplay: inline-block;\r\n\tfont: inherit;\r\n\tline-height: 1.5em;\r\n\tpadding: 0.5em 0.5em 0.5em 1em;\r\n\r\n\t/* reset */\r\n\tcolor: #2872b3;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n}\r\nselect.minimal {\r\n\tborder: 1px solid #2872b3;\r\n\tborder-radius: 30px;\r\n\twidth: 35%;\r\n\tfloat: right;\r\n\tbackground-image: linear-gradient(45deg, transparent 50%, gray 50%),\r\n\t\tlinear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);\r\n\tbackground-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\r\n\tbackground-size: 5px 5px, 5px 5px, 1px 1.5em;\r\n\tbackground-repeat: no-repeat;\r\n}\r\nselect.minimal:focus {\r\n\tbackground-image: linear-gradient(45deg, #2cade0 50%, transparent 50%),\r\n\t\tlinear-gradient(135deg, transparent 50%, #2cade0 50%), linear-gradient(to right, #ccc, #ccc);\r\n\tbackground-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 0.5em;\r\n\tbackground-size: 5px 5px, 5px 5px, 1px 1.5em;\r\n\tbackground-repeat: no-repeat;\r\n\tborder-color: #2cade0;\r\n\toutline: 0;\r\n}\r\n.sortDiv {\r\n\twidth: 50%;\r\n\tbackground-color: white;\r\n\tborder: 0px solid #ccc;\r\n\tpadding: 10px 20px 12px 40px;\r\n}\r\n/* .statusClass {\r\n\tborder: 1px solid red;\r\n} */\r\n.viewDetailClass {\r\n\tbackground-color: #2571bb;\r\n\tborder-radius: 26px;\r\n\tpadding: 10px;\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n}\r\n.vl {\r\n\tborder-left: 1px solid gray;\r\n\theight: 45px;\r\n}\r\n.proName {\r\n\tmargin-left: 1%;\r\n    float: left;\r\n    margin-top: -7px;\r\n    height: 45px;\r\n    font-family: arial;\r\n    font-size: 01;\r\n    font-weight: 50;\r\n}\r\n.proName1 {\r\n\tmargin-left: 1%;\r\n    float: left;\r\n    margin-top: -7px;\r\n\theight: 45px;\r\n\tcolor: #4a96d2;\r\n    font-family: arial;\r\n    font-size: 01;\r\n    font-weight: 50;\r\n}\r\n#customers {\r\n\tfont-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n\tborder-collapse: collapse;\r\n\twidth: 100%;\r\n\tborder:1px #2571bb solid;\r\n  }\r\n#tableth {\r\n\tpadding-top: 12px;\r\n\tpadding-bottom: 12px;\r\n\ttext-align: left;\r\n\tbackground-color: #4a96d2;\r\n\tcolor: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyL21lbWJlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGNBQWM7Q0FDZCw0QkFBNEI7Q0FDNUIsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLFVBQVU7Q0FDViw2QkFBNkI7Q0FDN0IseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQiwyQkFBMkI7QUFDNUI7QUFFQTtDQUNDLDJDQUEyQztDQUMzQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2QsOEJBQThCO0NBQzlCLCtCQUErQjtDQUMvQixVQUFVO0FBQ1g7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QiwrQkFBK0I7QUFDaEM7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QiwrQkFBK0I7QUFDaEM7QUFFQTtDQUNDLHdEQUF3RDtDQUN4RCw4QkFBOEI7Q0FDOUIsK0JBQStCO0FBQ2hDO0FBQ0E7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLHdEQUF3RDtDQUN4RCxnQ0FBZ0M7QUFDakM7QUFFQTtDQUNDLGNBQWM7QUFDZjtBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGlDQUE4QztDQUM5Qyx5QkFBeUI7Q0FDekIsMEJBQTBCO0NBQzFCLDRCQUE0QjtDQUM1Qiw0QkFBNEI7Q0FFNUIsa0NBQWtDO0FBQ25DO0FBRUE7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLHlCQUF5QjtBQUMxQjtBQUVBO0NBQ0MsY0FBYztBQUNmO0FBRUE7Q0FDQyxZQUFZO0NBQ1osdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQiw4QkFBOEI7O0NBRTlCLFVBQVU7Q0FDVixjQUFjO0NBQ2QsU0FBUztDQUdULHNCQUFzQjtDQUN0Qix3QkFBd0I7Q0FDeEIscUJBQXFCO0FBQ3RCO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixZQUFZO0NBQ1o7MkZBQzBGO0NBQzFGLG1IQUFtSDtDQUNuSCw0Q0FBNEM7Q0FDNUMsNEJBQTRCO0FBQzdCO0FBRUE7Q0FDQzs4RkFDNkY7Q0FDN0YsMkZBQTJGO0NBQzNGLDRDQUE0QztDQUM1Qyw0QkFBNEI7Q0FDNUIscUJBQXFCO0NBQ3JCLFVBQVU7QUFDWDtBQUVBO0NBQ0MsVUFBVTtDQUNWLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsNEJBQTRCO0FBQzdCO0FBRUE7O0dBRUc7QUFFSDtDQUNDLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFlBQVk7Q0FDWixlQUFlO0FBQ2hCO0FBRUE7Q0FDQywyQkFBMkI7Q0FDM0IsWUFBWTtBQUNiO0FBR0E7Q0FDQyxlQUFlO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBRUE7Q0FDQyxlQUFlO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtDQUNuQixZQUFZO0NBQ1osY0FBYztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0NBQ0MseURBQXlEO0NBQ3pELHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsd0JBQXdCO0VBQ3ZCO0FBRUE7Q0FDRCxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQix5QkFBeUI7Q0FDekIsWUFBWTtFQUNYIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyL21lbWJlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWF4LWhlaWdodDogMzkwcHg7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93OiBhdXRvO1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG59XHJcbi5tZW1iZXJpZC1jb2wge1xyXG5cdGZsZXg6IDAgMCAxMDBweCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcbi5idXR0b24tcm93IHtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuXHR3aWR0aDogOTAlO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG5cdC8qIHBhZGRpbmctbGVmdDogMTEzcHg7ICovXHJcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi10YWJzIHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDVkOSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiA5MyU7XHJcbn1cclxuXHJcbi5uYXZiYXIgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuXHRjb2xvcjogIzI1NzFiYjtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW07XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4yNXJlbTtcclxuXHR3aWR0aDogODglO1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW07XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluayB7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjI1cmVtO1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuMjVyZW07XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWxpbms6aG92ZXIge1xyXG5cdGJvcmRlci1jb2xvcjogI2U2ZWJmMSAjZTZlYmYxICMyNTcxYmIgI2U2ZWJmMSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4yNXJlbTtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2U2ZWJmMTtcclxuXHRib3JkZXItY29sb3I6ICNlNmViZjEgI2U2ZWJmMSAjMjU3MWJiICNlNmViZjEgIWltcG9ydGFudDtcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzI1NzFiYjtcclxufVxyXG5cclxuYSB7XHJcblx0Y29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcbi5zZWFyY2hib3gge1xyXG5cdGJvcmRlcjogMHB4IHNvbGlkICNjY2M7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaWNvbi5wbmcnKTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0cGFkZGluZzogMjBweCAyMHB4IDIwcHggNDBweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XHJcblx0dHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxudHIubWF0LWhlYWRlci1yb3cge1xyXG5cdGhlaWdodDogNTZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYmYxO1xyXG5cdGNvbG9yOiAjMjU3MWJiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbCB7XHJcblx0Y29sb3I6ICMyNTcxYmI7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcblx0Lyogc3R5bGluZyAqL1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHRsaW5lLWhlaWdodDogMS41ZW07XHJcblx0cGFkZGluZzogMC41ZW0gMC41ZW0gMC41ZW0gMWVtO1xyXG5cclxuXHQvKiByZXNldCAqL1xyXG5cdGNvbG9yOiAjMjg3MmIzO1xyXG5cdG1hcmdpbjogMDtcclxuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuc2VsZWN0Lm1pbmltYWwge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICMyODcyYjM7XHJcblx0Ym9yZGVyLXJhZGl1czogMzBweDtcclxuXHR3aWR0aDogMzUlO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JheSA1MCUpLFxyXG5cdFx0bGluZWFyLWdyYWRpZW50KDEzNWRlZywgZ3JheSA1MCUsIHRyYW5zcGFyZW50IDUwJSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgI2NjYyk7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDIuNWVtKSAwLjVlbTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDVweCA1cHgsIDVweCA1cHgsIDFweCAxLjVlbTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5zZWxlY3QubWluaW1hbDpmb2N1cyB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMmNhZGUwIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuXHRcdGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHRyYW5zcGFyZW50IDUwJSwgIzJjYWRlMCA1MCUpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2MsICNjY2MpO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIDE1cHgpIDFlbSwgY2FsYygxMDAlIC0gMjBweCkgMWVtLCBjYWxjKDEwMCUgLSAyLjVlbSkgMC41ZW07XHJcblx0YmFja2dyb3VuZC1zaXplOiA1cHggNXB4LCA1cHggNXB4LCAxcHggMS41ZW07XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRib3JkZXItY29sb3I6ICMyY2FkZTA7XHJcblx0b3V0bGluZTogMDtcclxufVxyXG5cclxuLnNvcnREaXYge1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyOiAwcHggc29saWQgI2NjYztcclxuXHRwYWRkaW5nOiAxMHB4IDIwcHggMTJweCA0MHB4O1xyXG59XHJcblxyXG4vKiAuc3RhdHVzQ2xhc3Mge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufSAqL1xyXG5cclxuLnZpZXdEZXRhaWxDbGFzcyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI1NzFiYjtcclxuXHRib3JkZXItcmFkaXVzOiAyNnB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnZsIHtcclxuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcblx0aGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG5cclxuLnByb05hbWUge1xyXG5cdG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMDE7XHJcbiAgICBmb250LXdlaWdodDogNTA7XHJcbn1cclxuXHJcbi5wcm9OYW1lMSB7XHJcblx0bWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG5cdGhlaWdodDogNDVweDtcclxuXHRjb2xvcjogIzRhOTZkMjtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogMDE7XHJcbiAgICBmb250LXdlaWdodDogNTA7XHJcbn1cclxuI2N1c3RvbWVycyB7XHJcblx0Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXI6MXB4ICMyNTcxYmIgc29saWQ7XHJcbiAgfVxyXG5cclxuICAjdGFibGV0aCB7XHJcblx0cGFkZGluZy10b3A6IDEycHg7XHJcblx0cGFkZGluZy1ib3R0b206IDEycHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGE5NmQyO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/member/member.component.ts":
/*!********************************************!*\
  !*** ./src/app/member/member.component.ts ***!
  \********************************************/
/*! exports provided: MemberComponent, MemberDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDataSource", function() { return MemberDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");




let MemberComponent = class MemberComponent {
    constructor(api) {
        this.api = api;
        this.displayedColumns = ['memberid', 'memfirstname', 'cntdate', 'assesstype', 'status', 'view'];
        this.dataSource = new MemberDataSource(this.api);
    }
    ngOnInit() {
        localStorage.setItem('member', '1');
        localStorage.removeItem('memberCreate');
        this.api.getMembers().subscribe((res) => {
            console.log(res);
            this.members = res;
        }, (err) => {
            console.log(err);
        });
    }
};
MemberComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
MemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/member/member.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member.component.css */ "./src/app/member/member.component.css")).default]
    })
], MemberComponent);

class MemberDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"] {
    constructor(api) {
        super();
        this.api = api;
    }
    connect() {
        return this.api.getMembers();
    }
    disconnect() { }
}


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sideBar {\n\t/* background-color: white; */\n\tposition: absolute;\n\t/* top: 2000; */\n\t/* left: 0; */\n\tmargin-left: 1%;\n\tpadding-top: 2%;\n\t/* bottom: 5000; */\n\twidth: 10%;\n\t/* z-index: auto; */\n\ttext-align: center;\n\t/* -webkit-box-shadow: 10px 7px 11px -5px rgba(115, 115, 115, 0.18);\n\t-moz-box-shadow: 10px 7px 11px -5px rgba(115, 115, 115, 0.18);\n\tbox-shadow: 10px 7px 11px -5px rgba(115, 115, 115, 0.18); */\n}\n\n.icon {\n\twidth: 70px;\n\theight: 65px;\n}\n\n.sideDiv {\n\tmargin-top: 10px;\n\tcursor: pointer;\n}\n\n.profile {\n\tmargin-top: 20px;\n\tmargin-bottom: 50px;\n}\n\na:hover {\n\ttext-decoration: none;\n}\n\n.navName {\n\tcolor: black;\n}\n\n.navName:hover {\n\tcolor: #2571bb;\n}\n\n.sidenav{\n  height: 2%;\n  width: 300;\n  position: fixed;\n  z-index: 1;\n  top: 136px;\n  left: 0;\n  background-color: rgb(205, 225, 248);\n  padding-top: 121px;\n  color: #8c8e90;\n  font-weight: 600;\n}\n\n.sidenav a {\n\tpadding: 6px 8px 6px 16px;\n\tfont-size: 10px;\t\n}\n\n.box1{\n\tbackground-color: #a7d0f0;\n    width: 168px;\n    padding: 16px;\n    margin: 2px;\n\tfloat: left;\n\tborder:1px rgb(95, 163, 246) solid;\n\ttext-align: left;\n\tfont-size: 02;\n    font-weight: 50;\n}\n\n.sideBarDiv{\n\tmargin-top: 20px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw2QkFBNkI7Q0FDN0Isa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsZUFBZTtDQUNmLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEI7OzREQUUyRDtBQUM1RDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0VBQ1YsVUFBVTtFQUNWLE9BQU87RUFDUCxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBR0E7Q0FDQyx5QkFBeUI7Q0FDekIsZUFBZTtBQUNoQjs7QUFHQTtDQUNDLHlCQUF5QjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7Q0FDZCxXQUFXO0NBQ1gsa0NBQWtDO0NBQ2xDLGdCQUFnQjtDQUNoQixhQUFhO0lBQ1YsZUFBZTtBQUNuQjs7QUFHQTtDQUNDO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlQmFyIHtcblx0LyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0LyogdG9wOiAyMDAwOyAqL1xuXHQvKiBsZWZ0OiAwOyAqL1xuXHRtYXJnaW4tbGVmdDogMSU7XG5cdHBhZGRpbmctdG9wOiAyJTtcblx0LyogYm90dG9tOiA1MDAwOyAqL1xuXHR3aWR0aDogMTAlO1xuXHQvKiB6LWluZGV4OiBhdXRvOyAqL1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdC8qIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCA3cHggMTFweCAtNXB4IHJnYmEoMTE1LCAxMTUsIDExNSwgMC4xOCk7XG5cdC1tb3otYm94LXNoYWRvdzogMTBweCA3cHggMTFweCAtNXB4IHJnYmEoMTE1LCAxMTUsIDExNSwgMC4xOCk7XG5cdGJveC1zaGFkb3c6IDEwcHggN3B4IDExcHggLTVweCByZ2JhKDExNSwgMTE1LCAxMTUsIDAuMTgpOyAqL1xufVxuXG4uaWNvbiB7XG5cdHdpZHRoOiA3MHB4O1xuXHRoZWlnaHQ6IDY1cHg7XG59XG5cbi5zaWRlRGl2IHtcblx0bWFyZ2luLXRvcDogMTBweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZmlsZSB7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbmE6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXZOYW1lIHtcblx0Y29sb3I6IGJsYWNrO1xufVxuXG4ubmF2TmFtZTpob3ZlciB7XG5cdGNvbG9yOiAjMjU3MWJiO1xufVxuXG4uc2lkZW5hdntcbiAgaGVpZ2h0OiAyJTtcbiAgd2lkdGg6IDMwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDEzNnB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMjUsIDI0OCk7XG4gIHBhZGRpbmctdG9wOiAxMjFweDtcbiAgY29sb3I6ICM4YzhlOTA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cblxuLnNpZGVuYXYgYSB7XG5cdHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XG5cdGZvbnQtc2l6ZTogMTBweDtcdFxufVxuICBcblxuLmJveDF7XG5cdGJhY2tncm91bmQtY29sb3I6ICNhN2QwZjA7XG4gICAgd2lkdGg6IDE2OHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWFyZ2luOiAycHg7XG5cdGZsb2F0OiBsZWZ0O1xuXHRib3JkZXI6MXB4IHJnYig5NSwgMTYzLCAyNDYpIHNvbGlkO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRmb250LXNpemU6IDAyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDtcbn1cblxuXG4uc2lkZUJhckRpdntcblx0bWFyZ2luLXRvcDogMjBweFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
        if (localStorage.getItem('member') === '1') {
            this.isHome = true;
        }
        if (localStorage.getItem('memberCreate') === '2') {
            this.isAddCase = true;
        }
        //this.isHome = true;
        // this.isAddCase = false;
    }
    gotoHome() {
        this.isHome = true;
        this.isAddCase = false;
        this.isCaseList = false;
    }
    gotoAddCase() {
        this.isAddCase = true;
        this.isHome = false;
        this.isCaseList = false;
    }
    gotoCaseList() {
        this.isCaseList = true;
        this.isAddCase = false;
        this.isHome = false;
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\U83428\Desktop\Anthem Case Assist\Local Version\LTSS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map