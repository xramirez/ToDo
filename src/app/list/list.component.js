"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListComponent = void 0;
const core_1 = require("@angular/core");
let ListComponent = class ListComponent {
    constructor() {
        this.todo = "";
        this.list = [{ todo: 'Walk the dogs', completed: false, show: true }];
        this.name = 'Xavi';
    }
    ngOnInit() {
    }
    addItem(todo) {
        this.list.push({ todo, completed: false, show: true });
    }
    select(index) {
        console.log(this.list[index]);
        if (this.list[index].completed) {
            this.list.splice(index, 1);
        }
        else {
            this.list[index].completed = true;
        }
    }
    edit(index, newValue) {
        this.list[index].show = !this.list[index].show;
        if (this.list[index].show) {
            this.list[index].todo = newValue;
            this.list[index].completed = false;
        }
    }
};
ListComponent = __decorate([
    (0, core_1.Component)({
        selector: 'list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.scss']
    })
], ListComponent);
exports.ListComponent = ListComponent;
