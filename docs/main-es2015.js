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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");





const routes = [
    { path: '', component: _todos_todos_component__WEBPACK_IMPORTED_MODULE_2__["TodosComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'angular-todo-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-item/todo-item.component */ "./src/app/todo-item/todo-item.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _edit_todo_dialog_edit_todo_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-todo-dialog/edit-todo-dialog.component */ "./src/app/edit-todo-dialog/edit-todo-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_tool_tip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/tool-tip.directive */ "./src/app/shared/tool-tip.directive.ts");
/* harmony import */ var _shared_tool_tip_singleton_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/tool-tip-singleton.directive */ "./src/app/shared/tool-tip-singleton.directive.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _todos_todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"],
        _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__["TodoItemComponent"],
        _edit_todo_dialog_edit_todo_dialog_component__WEBPACK_IMPORTED_MODULE_8__["EditTodoDialogComponent"],
        _shared_tool_tip_directive__WEBPACK_IMPORTED_MODULE_10__["ToolTipDirective"],
        _shared_tool_tip_singleton_directive__WEBPACK_IMPORTED_MODULE_11__["ToolTipSingletonDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _todos_todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"],
                    _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__["TodoItemComponent"],
                    _edit_todo_dialog_edit_todo_dialog_component__WEBPACK_IMPORTED_MODULE_8__["EditTodoDialogComponent"],
                    _shared_tool_tip_directive__WEBPACK_IMPORTED_MODULE_10__["ToolTipDirective"],
                    _shared_tool_tip_singleton_directive__WEBPACK_IMPORTED_MODULE_11__["ToolTipSingletonDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/edit-todo-dialog/edit-todo-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/edit-todo-dialog/edit-todo-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: EditTodoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoDialogComponent", function() { return EditTodoDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/todo.model */ "./src/app/shared/todo.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function EditTodoDialogComponent_div_9_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditTodoDialogComponent_div_9_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0435 \u043C\u0435\u043D\u0435\u0435 2 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditTodoDialogComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditTodoDialogComponent_div_9_p_1_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditTodoDialogComponent_div_9_p_2_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
} }
class EditTodoDialogComponent {
    constructor(dialogRef, todo) {
        this.dialogRef = dialogRef;
        this.todo = todo;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
    onFormSubmit(form) {
        if (form.invalid)
            return;
        const updatedTodo = Object.assign(Object.assign({}, this.todo), form.value);
        this.dialogRef.close(updatedTodo);
    }
}
EditTodoDialogComponent.ɵfac = function EditTodoDialogComponent_Factory(t) { return new (t || EditTodoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
EditTodoDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditTodoDialogComponent, selectors: [["app-edit-todo-dialog"]], decls: 20, vars: 2, consts: [[1, "title"], ["mat-dialog-content", ""], [3, "ngSubmit"], ["form", "ngForm"], [1, "field"], [1, "control"], ["type", "text", "name", "text", "required", "", "minlength", "2", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u043B\u043E...", 1, "input", 3, "ngModel"], ["todoTextField", "ngModel"], [4, "ngIf"], [1, "field", "is-grouped", "is-grouped-right"], ["type", "button", 1, "button", "is-light", 3, "click"], ["type", "submit", 1, "button", "alt-gradient-button"], [1, "material-icons"], ["class", "help is-danger", 4, "ngIf"], [1, "help", "is-danger"]], template: function EditTodoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditTodoDialogComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.onFormSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditTodoDialogComponent_div_9_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTodoDialogComponent_Template_button_click_13_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041E\u0442\u043C\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.todo.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdG9kby1kaWFsb2cvZWRpdC10b2RvLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTodoDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-todo-dialog',
                templateUrl: './edit-todo-dialog.component.html',
                styleUrls: ['./edit-todo-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _shared_todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DataService {
    constructor() {
        this.todos = [];
    }
    getAllTodos() {
        this.todos = this.getLocalStorage();
        return this.todos;
    }
    addTodo(todo) {
        this.todos.push(todo);
        this.setLocalStorage();
    }
    updateTodo(index, updatedTodo) {
        this.todos[index] = updatedTodo;
        this.setLocalStorage();
    }
    deleteTodo(index) {
        this.todos.splice(index, 1);
        this.setLocalStorage();
    }
    getLocalStorage() {
        const todos = JSON.parse(localStorage.getItem('todos'));
        return todos ? todos : [];
    }
    setLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/todo.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/todo.model.ts ***!
  \**************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
class Todo {
    constructor(text, completed = false) {
        this.text = text;
        this.completed = completed;
    }
}


/***/ }),

/***/ "./src/app/shared/tool-tip-singleton.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/tool-tip-singleton.directive.ts ***!
  \********************************************************/
/*! exports provided: ToolTipSingletonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolTipSingletonDirective", function() { return ToolTipSingletonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var _tool_tip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tool-tip.directive */ "./src/app/shared/tool-tip.directive.ts");




class ToolTipSingletonDirective {
    constructor() { }
    ngAfterViewInit() {
        this.singletonInstance = Object(tippy_js__WEBPACK_IMPORTED_MODULE_1__["createSingleton"])(this.getTippyInstances(), {
            delay: [200, 0],
            moveTransition: 'transform 0.2s ease-out'
        });
        this.elementsWithTooltips.changes.subscribe(() => {
            this.singletonInstance.setInstances(this.getTippyInstances());
        });
    }
    getTippyInstances() {
        return this.elementsWithTooltips
            .toArray()
            .map(t => t.tippyInstance);
    }
}
ToolTipSingletonDirective.ɵfac = function ToolTipSingletonDirective_Factory(t) { return new (t || ToolTipSingletonDirective)(); };
ToolTipSingletonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ToolTipSingletonDirective, selectors: [["", "appToolTipSingleton", ""]], contentQueries: function ToolTipSingletonDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _tool_tip_directive__WEBPACK_IMPORTED_MODULE_2__["ToolTipDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elementsWithTooltips = _t);
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolTipSingletonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appToolTipSingleton]'
            }]
    }], function () { return []; }, { elementsWithTooltips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_tool_tip_directive__WEBPACK_IMPORTED_MODULE_2__["ToolTipDirective"], { descendants: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/tool-tip.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/tool-tip.directive.ts ***!
  \**********************************************/
/*! exports provided: ToolTipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolTipDirective", function() { return ToolTipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");



class ToolTipDirective {
    constructor(elRef) {
        this.elRef = elRef;
    }
    ngAfterViewInit() {
        this.tippyInstance = Object(tippy_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.elRef.nativeElement, {
            content: this.tooltipContent
        });
    }
    ngOnChanges(changes) {
        if (changes['tooltipContent']) { // input content has changed
            this.updateToolTipContent();
        }
    }
    updateToolTipContent() {
        if (this.tippyInstance) {
            this.tippyInstance.setContent(this.tooltipContent);
        }
    }
}
ToolTipDirective.ɵfac = function ToolTipDirective_Factory(t) { return new (t || ToolTipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ToolTipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ToolTipDirective, selectors: [["", "appToolTip", ""]], inputs: { tooltipContent: ["appToolTip", "tooltipContent"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolTipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appToolTip]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { tooltipContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appToolTip']
        }] }); })();


/***/ }),

/***/ "./src/app/todo-item/todo-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.ts ***!
  \**************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_tool_tip_singleton_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/tool-tip-singleton.directive */ "./src/app/shared/tool-tip-singleton.directive.ts");
/* harmony import */ var _shared_tool_tip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/tool-tip.directive */ "./src/app/shared/tool-tip.directive.ts");




class TodoItemComponent {
    constructor() {
        this.todoClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onTodoClicked() {
        this.todoClicked.emit();
    }
    onEditClicked() {
        this.editClicked.emit();
    }
    onDeleteClicked() {
        this.deleteClicked.emit();
    }
}
TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) { return new (t || TodoItemComponent)(); };
TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoItemComponent, selectors: [["app-todo-item"]], inputs: { todo: "todo" }, outputs: { todoClicked: "todoClicked", editClicked: "editClicked", deleteClicked: "deleteClicked" }, decls: 13, vars: 3, consts: [[1, "todo-item", 3, "click"], [1, "check-box"], [1, "material-icons"], [1, "todo-text"], ["appToolTipSingleton", "", 1, "todo-controls-box", 3, "click"], ["appToolTip", "Edit Todo", 1, "todo-control-button", 3, "click"], ["appToolTip", "Delete Todo", 1, "todo-control-button", "is-danger", 3, "click"]], template: function TodoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_0_listener() { return ctx.onTodoClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_6_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_7_listener() { return ctx.onEditClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_div_click_10_listener() { return ctx.onDeleteClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", ctx.todo.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.todo.text, " ");
    } }, directives: [_shared_tool_tip_singleton_directive__WEBPACK_IMPORTED_MODULE_1__["ToolTipSingletonDirective"], _shared_tool_tip_directive__WEBPACK_IMPORTED_MODULE_2__["ToolTipDirective"]], styles: [".todo-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  font-size: 18px;\n  padding: 35px 15px;\n  border-bottom: 1px solid #f2f3f5;\n}\n.todo-item.completed[_ngcontent-%COMP%] {\n  color: #aaa;\n}\n.todo-item[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  border: 2px solid #eee;\n  border-radius: 50%;\n  margin-right: 20px;\n  height: 28px;\n  width: 28px;\n  transition: background-color 0.2s, border-color 0.2s;\n}\n.todo-item[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: auto;\n  color: #333;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.todo-item[_ngcontent-%COMP%]:hover   .check-box[_ngcontent-%COMP%] {\n  background: #eee;\n}\n.todo-item[_ngcontent-%COMP%]:hover   .check-box[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  opacity: 0.28;\n}\n.todo-item.completed[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%] {\n  background: #71a663;\n  border-color: #71a663;\n}\n.todo-item.completed[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.todo-item[_ngcontent-%COMP%]   .todo-controls-box[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 5px;\n  display: flex;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(2px);\n  transition: opacity 0.2s, visibility 0.2s, transform 0.2s;\n}\n.todo-item[_ngcontent-%COMP%]:hover   .todo-controls-box[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transition-delay: 0.4s;\n  transform: translateY(0);\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f5f7f8;\n  padding: 7px 10px;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 20px;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%]:hover {\n  background: #eee;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%]:hover   i.material-icons[_ngcontent-%COMP%] {\n  color: #333;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%]:active {\n  background: #e5e7e8;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%]:first-of-type {\n  border-top-left-radius: 7px;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button[_ngcontent-%COMP%]:last-of-type {\n  border-top-right-radius: 7px;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button.is-danger[_ngcontent-%COMP%]:hover   i.material-icons[_ngcontent-%COMP%] {\n  color: #9b1b1b;\n}\n.todo-controls-box[_ngcontent-%COMP%]   .todo-control-button.is-danger[_ngcontent-%COMP%]:active   i.material-icons[_ngcontent-%COMP%] {\n  color: #bd2525;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1pdGVtL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcdG8tZG9cXGFuZ3VsYXItdG9kby1hcHAvc3JjXFxhcHBcXHRvZG8taXRlbVxcdG9kby1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFFQSxlQUFBO0VBRUEsZUFBQTtFQUVBLGtCQUFBO0VBRUEsZ0NBQUE7QUNKSjtBRE1JO0VBQ0ksV0FBQTtBQ0pSO0FEUUE7RUFDSSxhQUFBO0VBRUEsY0FBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBRUEsb0RBQUE7QUNWSjtBRFlJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBR0EsVUFBQTtFQUVBLHdCQUFBO0FDZFI7QURrQkE7RUFDSSxnQkFBQTtBQ2ZKO0FEZ0JJO0VBQ0ksYUFBQTtBQ2RSO0FEa0JBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQ2ZKO0FEaUJJO0VBQ0ksVUFBQTtBQ2ZSO0FEbUJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFHQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUVBLHlEQUFBO0FDcEJKO0FEdUJBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSx3QkFBQTtBQ3JCSjtBRHdCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0FDdEJKO0FEd0JJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUN0QlI7QUR5Qkk7RUFDSSxnQkFBQTtBQ3ZCUjtBRHlCUTtFQUNJLFdBQUE7QUN2Qlo7QUQyQkk7RUFDSSxtQkFBQTtBQ3pCUjtBRDRCSTtFQUNJLDJCQUFBO0FDMUJSO0FENkJJO0VBQ0ksNEJBQUE7QUMzQlI7QUQrQkE7RUFDSSxjQUFBO0FDNUJKO0FEK0JBO0VBQ0ksY0FBQTtBQzVCSiIsImZpbGUiOiJzcmMvYXBwL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kby1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgcGFkZGluZzogMzVweCAxNXB4O1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmM2Y1O1xyXG5cclxuICAgICYuY29tcGxldGVkIHtcclxuICAgICAgICBjb2xvcjogI2FhYTtcclxuICAgIH1cclxufVxyXG5cclxuLnRvZG8taXRlbSAuY2hlY2stYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgYm9yZGVyLWNvbG9yIDAuMnM7XHJcblxyXG4gICAgaS5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaGlkZSBieSBkZWZhdWx0XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9kby1pdGVtOmhvdmVyIC5jaGVjay1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGkubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b2RvLWl0ZW0uY29tcGxldGVkIC5jaGVjay1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogIzcxYTY2MztcclxuICAgIGJvcmRlci1jb2xvcjogIzcxYTY2MztcclxuXHJcbiAgICBpLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9kby1pdGVtIC50b2RvLWNvbnRyb2xzLWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogNXB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLy8gaGlkZSBieSBkZWZhdWx0XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB2aXNpYmlsaXR5IDAuMnMsIHRyYW5zZm9ybSAwLjJzO1xyXG59XHJcblxyXG4udG9kby1pdGVtOmhvdmVyIC50b2RvLWNvbnRyb2xzLWJveCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XHJcblxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4udG9kby1jb250cm9scy1ib3ggLnRvZG8tY29udHJvbC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY3Zjg7XHJcblxyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcblxyXG4gICAgaS5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcblxyXG4gICAgICAgIGkubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNWU3ZTg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b2RvLWNvbnRyb2xzLWJveCAudG9kby1jb250cm9sLWJ1dHRvbi5pcy1kYW5nZXI6aG92ZXIgaS5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBjb2xvcjogcmdiKDE1NSwgMjcsIDI3KTtcclxufVxyXG5cclxuLnRvZG8tY29udHJvbHMtYm94IC50b2RvLWNvbnRyb2wtYnV0dG9uLmlzLWRhbmdlcjphY3RpdmUgaS5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBjb2xvcjogcmdiKDE4OSwgMzcsIDM3KTtcclxufSIsIi50b2RvLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAzNXB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmM2Y1O1xufVxuLnRvZG8taXRlbS5jb21wbGV0ZWQge1xuICBjb2xvcjogI2FhYTtcbn1cblxuLnRvZG8taXRlbSAuY2hlY2stYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGJvcmRlci1jb2xvciAwLjJzO1xufVxuLnRvZG8taXRlbSAuY2hlY2stYm94IGkubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6ICMzMzM7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cblxuLnRvZG8taXRlbTpob3ZlciAuY2hlY2stYm94IHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cbi50b2RvLWl0ZW06aG92ZXIgLmNoZWNrLWJveCBpLm1hdGVyaWFsLWljb25zIHtcbiAgb3BhY2l0eTogMC4yODtcbn1cblxuLnRvZG8taXRlbS5jb21wbGV0ZWQgLmNoZWNrLWJveCB7XG4gIGJhY2tncm91bmQ6ICM3MWE2NjM7XG4gIGJvcmRlci1jb2xvcjogIzcxYTY2Mztcbn1cbi50b2RvLWl0ZW0uY29tcGxldGVkIC5jaGVjay1ib3ggaS5tYXRlcmlhbC1pY29ucyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50b2RvLWl0ZW0gLnRvZG8tY29udHJvbHMtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdmlzaWJpbGl0eSAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLnRvZG8taXRlbTpob3ZlciAudG9kby1jb250cm9scy1ib3gge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi50b2RvLWNvbnRyb2xzLWJveCAudG9kby1jb250cm9sLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNmNWY3Zjg7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xufVxuLnRvZG8tY29udHJvbHMtYm94IC50b2RvLWNvbnRyb2wtYnV0dG9uIGkubWF0ZXJpYWwtaWNvbnMge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnRvZG8tY29udHJvbHMtYm94IC50b2RvLWNvbnRyb2wtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cbi50b2RvLWNvbnRyb2xzLWJveCAudG9kby1jb250cm9sLWJ1dHRvbjpob3ZlciBpLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6ICMzMzM7XG59XG4udG9kby1jb250cm9scy1ib3ggLnRvZG8tY29udHJvbC1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U1ZTdlODtcbn1cbi50b2RvLWNvbnRyb2xzLWJveCAudG9kby1jb250cm9sLWJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xufVxuLnRvZG8tY29udHJvbHMtYm94IC50b2RvLWNvbnRyb2wtYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG59XG5cbi50b2RvLWNvbnRyb2xzLWJveCAudG9kby1jb250cm9sLWJ1dHRvbi5pcy1kYW5nZXI6aG92ZXIgaS5tYXRlcmlhbC1pY29ucyB7XG4gIGNvbG9yOiAjOWIxYjFiO1xufVxuXG4udG9kby1jb250cm9scy1ib3ggLnRvZG8tY29udHJvbC1idXR0b24uaXMtZGFuZ2VyOmFjdGl2ZSBpLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6ICNiZDI1MjU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-item',
                templateUrl: './todo-item.component.html',
                styleUrls: ['./todo-item.component.scss']
            }]
    }], function () { return []; }, { todo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], todoClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], editClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/todo.model */ "./src/app/shared/todo.model.ts");
/* harmony import */ var _edit_todo_dialog_edit_todo_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-todo-dialog/edit-todo-dialog.component */ "./src/app/edit-todo-dialog/edit-todo-dialog.component.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../todo-item/todo-item.component */ "./src/app/todo-item/todo-item.component.ts");









function TodosComponent_div_18_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodosComponent_div_18_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0435 \u043C\u0435\u043D\u0435\u0435 2 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodosComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodosComponent_div_18_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodosComponent_div_18_p_2_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
} }
function TodosComponent_app_todo_item_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-todo-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("todoClicked", function TodosComponent_app_todo_item_22_Template_app_todo_item_todoClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const todo_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.toggleCompleted(todo_r6); })("editClicked", function TodosComponent_app_todo_item_22_Template_app_todo_item_editClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const todo_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.editTodo(todo_r6); })("deleteClicked", function TodosComponent_app_todo_item_22_Template_app_todo_item_deleteClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const todo_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.deleteTodo(todo_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r6);
} }
class TodosComponent {
    constructor(dataService, dialog) {
        this.dataService = dataService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.todos = this.dataService.getAllTodos();
    }
    onFormSubmit(form) {
        if (form.invalid)
            return this.showValidationErrors = true;
        this.dataService.addTodo(new _shared_todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"](form.value.text));
        this.showValidationErrors = false;
        form.reset();
    }
    toggleCompleted(todo) {
        const index = this.todos.indexOf(todo);
        todo.completed = !todo.completed;
        this.dataService.updateTodo(index, todo);
    }
    editTodo(todo) {
        const index = this.todos.indexOf(todo);
        let dialogRef = this.dialog.open(_edit_todo_dialog_edit_todo_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EditTodoDialogComponent"], {
            width: '700px',
            data: todo
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.dataService.updateTodo(index, result);
            }
        });
    }
    deleteTodo(todo) {
        const index = this.todos.indexOf(todo);
        this.dataService.deleteTodo(index);
    }
}
TodosComponent.ɵfac = function TodosComponent_Factory(t) { return new (t || TodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
TodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodosComponent, selectors: [["app-todos"]], decls: 23, vars: 2, consts: [[1, "heading-section"], [1, "title", "is-1", "has-text-centered"], [1, "container", "add-todo-box-container"], [1, "add-todo-box"], [3, "ngSubmit"], ["form", "ngForm"], [1, "title", "is-5"], [1, "field", "is-grouped", 2, "margin", "0"], [1, "control", "is-expanded"], ["ngModel", "", "required", "", "minlength", "2", "name", "text", "type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u043B\u043E...", 1, "input"], ["todoTextField", "ngModel"], [1, "control"], ["type", "submit", 1, "button", "alt-gradient-button"], [1, "material-icons"], [4, "ngIf"], [1, "section"], [1, "container"], [1, "todos-list"], [3, "todo", "todoClicked", "editClicked", "deleteClicked", 4, "ngFor", "ngForOf"], ["class", "help is-danger", 4, "ngIf"], [1, "help", "is-danger"], [3, "todo", "todoClicked", "editClicked", "deleteClicked"]], template: function TodosComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "To-do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TodosComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.onFormSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041D\u043E\u0432\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u0434\u0435\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TodosComponent_div_18_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TodosComponent_app_todo_item_22_Template, 1, 1, "app-todo-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && ctx.showValidationErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todos);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_7__["TodoItemComponent"]], styles: [".heading-section[_ngcontent-%COMP%] {\n  background: #a8d7da;\n  padding: 100px;\n  padding-bottom: 150px;\n}\n.heading-section[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: white;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.add-todo-box-container[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.add-todo-box[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: white;\n  border-radius: 4px;\n  margin-top: -68px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFx0by1kb1xcYW5ndWxhci10b2RvLWFwcC9zcmNcXGFwcFxcdG9kb3NcXHRvZG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2Rvcy90b2Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBRUEsY0FBQTtFQUNBLHFCQUFBO0FDQUo7QURFSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0FDQVI7QURJQTtFQUNJLGdCQUFBO0FDREo7QURJQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0RKO0FESUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsMENBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmctc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYThkN2RhO1xyXG5cclxuICAgIHBhZGRpbmc6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xyXG5cclxuICAgIGgxLnRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoYmxhY2ssIDAuMTIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi5hZGQtdG9kby1ib3gtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uYWRkLXRvZG8tYm94IHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTY4cHg7XHJcblxyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKGJsYWNrLCAwLjA4KTtcclxufSIsIi5oZWFkaW5nLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjYThkN2RhO1xuICBwYWRkaW5nOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xufVxuLmhlYWRpbmctc2VjdGlvbiBoMS50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLmFkZC10b2RvLWJveC1jb250YWluZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5hZGQtdG9kby1ib3gge1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAtNjhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todos',
                templateUrl: './todos.component.html',
                styleUrls: ['./todos.component.scss']
            }]
    }], function () { return [{ type: _shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\to-do\angular-todo-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map