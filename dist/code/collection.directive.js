"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const collection_service_1 = require("./collection.service");
// ---------- beg 只能输入日期 ----------
let OnlyDateDirective = class OnlyDateDirective {
    constructor(control, srv) {
        this.control = control;
        this.srv = srv;
    }
    onkeydown(e) {
        if (!this.srv.onlyDateKeyDownFn(e)) {
            return false;
        }
    }
    /** @internal */
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^0-9-]/g, '');
        this.control.viewToModelUpdate(this.srv.onlyDateKeyUpFn(e));
    }
};
OnlyDateDirective = __decorate([
    core_1.Directive({
        selector: '[onlyDate]',
        host: {
            '(keyup)': 'onkeyup($event)',
            '(keydown)': 'onkeydown($event)',
            'maxlength': '10',
        },
        providers: [forms_1.NgModel, collection_service_1.CollectionService],
    }),
    __metadata("design:paramtypes", [forms_1.NgModel, collection_service_1.CollectionService])
], OnlyDateDirective);
exports.OnlyDateDirective = OnlyDateDirective;
// ---------- end 只能输入日期 ----------
/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/
// ---------- beg 只能输入日期时间 ----------
let OnlyDateTimeDirective = class OnlyDateTimeDirective {
    constructor(control, srv) {
        this.control = control;
        this.srv = srv;
    }
    onkeydown(e) {
        if (e.key !== "Backspace") {
            if (!this.srv.onlyDateTimeKeyDownFn(e)) {
                return false;
            }
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^0-9-\s*:]/g, '');
        this.control.viewToModelUpdate(this.srv.onlyDateTimeKeyUpFn(e));
    }
};
OnlyDateTimeDirective = __decorate([
    core_1.Directive({
        selector: '[onlyDateTime]',
        host: {
            '(keyup)': 'onkeyup($event)',
            '(keydown)': 'onkeydown($event)',
            'maxlength': '19',
        },
        providers: [forms_1.NgModel, collection_service_1.CollectionService],
    }),
    __metadata("design:paramtypes", [forms_1.NgModel, collection_service_1.CollectionService])
], OnlyDateTimeDirective);
exports.OnlyDateTimeDirective = OnlyDateTimeDirective;
// ---------- end 只能输入日期时间 ----------
/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/
let OnlyEmailDirective = class OnlyEmailDirective {
    constructor(control) {
        this.control = control;
    }
    onfocus(e) {
        if (e.target.value = "请输入正确的邮箱") {
            e.target.value = '';
            e.target.style.color = this.color;
        }
    }
    onblur(e) {
        let reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
        if (!reg.test(e.target.value)) {
            e.target.value = '请输入正确的邮箱';
            this.color = e.target.style.color;
            e.target.style.color = "red";
        }
        this.control.viewToModelUpdate(e.target.value);
    }
};
OnlyEmailDirective = __decorate([
    core_1.Directive({
        selector: '[onlyEmail]',
        host: {
            '(blur)': 'onblur($event)',
            '(focus)': 'onfocus($event)',
        },
    }),
    __metadata("design:paramtypes", [forms_1.NgModel])
], OnlyEmailDirective);
exports.OnlyEmailDirective = OnlyEmailDirective;
/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/
// ---------- beg 只能输入整数 ----------
let OnlyIntDirective = class OnlyIntDirective {
    constructor(control, srv) {
        this.control = control;
        this.srv = srv;
    }
    onkeydown(e) {
        if (!this.srv.onlyIntKeyDownFn(e)) {
            return false;
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^\d+-]/g, '');
        this.control.viewToModelUpdate(e.target.value);
    }
};
OnlyIntDirective = __decorate([
    core_1.Directive({
        selector: '[onlyInt]',
        host: {
            '(keyup)': 'onkeyup($event)',
            '(keydown)': 'onkeydown($event)',
        },
        providers: [forms_1.NgModel, collection_service_1.CollectionService],
    }),
    __metadata("design:paramtypes", [forms_1.NgModel, collection_service_1.CollectionService])
], OnlyIntDirective);
exports.OnlyIntDirective = OnlyIntDirective;
// ---------- end 只能输入整数 ----------
/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/
// ---------- beg 只能输入浮点数 ----------
let OnlyFloatDirective = class OnlyFloatDirective {
    constructor(control, srv) {
        this.control = control;
        this.srv = srv;
    }
    onkeydown(e) {
        if (!this.srv.onlyFloatKeyDownFn(e)) {
            return false;
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^\d+-.]/g, '');
        this.control.viewToModelUpdate(e.target.value);
    }
    onblur(e) {
        this.control.viewToModelUpdate(this.srv.blurFn(e));
    }
};
OnlyFloatDirective = __decorate([
    core_1.Directive({
        selector: '[onlyFloat]',
        host: {
            '(keyup)': 'onkeyup($event)',
            '(keydown)': 'onkeydown($event)',
            '(blur)': 'onblur($event)'
        },
        providers: [forms_1.NgModel, collection_service_1.CollectionService],
    }),
    __metadata("design:paramtypes", [forms_1.NgModel, collection_service_1.CollectionService])
], OnlyFloatDirective);
exports.OnlyFloatDirective = OnlyFloatDirective;
// ---------- end 只能输入浮点数 ----------
/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/
// ---------- beg 只能输入数字 ----------
let OnlyNumberDirective = class OnlyNumberDirective {
    constructor(control, srv) {
        this.control = control;
        this.srv = srv;
    }
    onkeydown(e) {
        if (!this.srv.onlyNumberKeyDownFn(e)) {
            return false;
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^\d+-.]/g, '');
        this.control.viewToModelUpdate(e.target.value);
    }
};
OnlyNumberDirective = __decorate([
    core_1.Directive({
        selector: '[onlyNumber]',
        host: {
            '(keyup)': 'onkeyup($event)',
            '(keydown)': 'onkeydown($event)',
        },
        providers: [forms_1.NgModel, collection_service_1.CollectionService],
    }),
    __metadata("design:paramtypes", [forms_1.NgModel, collection_service_1.CollectionService])
], OnlyNumberDirective);
exports.OnlyNumberDirective = OnlyNumberDirective;
// ---------- end 只能输入数字 ----------
/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/
// ---------- beg 只能输入汉字 ----------
let OnlyChDirective = class OnlyChDirective {
    constructor(control) {
        this.control = control;
    }
    onkeydown(e) {
        if (e.key !== "Backspace") {
            return false;
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^\u4e00-\u9fa5]/g, '');
        // e.target.value = e.target.value.replace(/^([^a-z].*)|(([a-z]\w*).*\W.*)$/i,'$3');
        this.control.viewToModelUpdate(e.target.value);
    }
};
OnlyChDirective = __decorate([
    core_1.Directive({
        selector: '[onlyCh]',
        host: {
            '(keyup)': 'onkeyup($event)',
            '(keydown)': 'onkeydown($event)',
        },
    }),
    __metadata("design:paramtypes", [forms_1.NgModel])
], OnlyChDirective);
exports.OnlyChDirective = OnlyChDirective;
// ---------- end 只能输入汉字 ----------
/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/
// ---------- beg 只能输入英文 ----------
let OnlyEnDirective = class OnlyEnDirective {
    constructor(control) {
        this.control = control;
    }
    onkeydown(e) {
        if (e.key !== "Backspace") {
            if (!isNaN(e.key * 1)) {
                return false;
            }
            if (e.code === "Space") {
                return false;
            }
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^a-zA-Z\(\)]/g, '');
        this.control.viewToModelUpdate(e.target.value);
    }
};
OnlyEnDirective = __decorate([
    core_1.Directive({
        selector: '[onlyEn]',
        host: {
            '(keyup)': 'onkeyup($event)',
            '(keydown)': 'onkeydown($event)',
        },
    }),
    __metadata("design:paramtypes", [forms_1.NgModel])
], OnlyEnDirective);
exports.OnlyEnDirective = OnlyEnDirective;
// ---------- beg 只能输入英文 ----------
/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/
// ---------- beg 只能输入英文加数字 ----------
let OnlyEnNumDirective = class OnlyEnNumDirective {
    constructor(control) {
        this.control = control;
    }
    onkeydown(e) {
        if (e.key !== "Backspace") {
            if (e.code === "Space") {
                return false;
            }
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
        this.control.viewToModelUpdate(e.target.value);
    }
};
OnlyEnNumDirective = __decorate([
    core_1.Directive({
        selector: '[onlyEnNum]',
        host: {
            '(keyup)': 'onkeyup($event)',
            '(keydown)': 'onkeydown($event)',
        },
    }),
    __metadata("design:paramtypes", [forms_1.NgModel])
], OnlyEnNumDirective);
exports.OnlyEnNumDirective = OnlyEnNumDirective;
// ---------- end 只能输入英文加数字 ----------
/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/
// ---------- beg 只能输入英文加数字符号 ----------
let OnlyEnNumSingDirective = class OnlyEnNumSingDirective {
    constructor(control) {
        this.control = control;
    }
    onkeydown(e) {
        if (e.key !== "Backspace") {
            if (e.code === "Space") {
                return false;
            }
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^\w.\(\)\<\>\[\]]/g, '');
        this.control.viewToModelUpdate(e.target.value);
    }
};
OnlyEnNumSingDirective = __decorate([
    core_1.Directive({
        selector: '[onlyEnNumSign]',
        host: {
            '(keyup)': 'onkeyup($event)',
            '(keydown)': 'onkeydown($event)',
        },
    }),
    __metadata("design:paramtypes", [forms_1.NgModel])
], OnlyEnNumSingDirective);
exports.OnlyEnNumSingDirective = OnlyEnNumSingDirective;
// ---------- end 只能输入英文加数字 ----------
/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/
// ---------- beg 只能输入货币数字 ----------
let OnlyMoneyDirective = class OnlyMoneyDirective {
    constructor(control, srv) {
        this.control = control;
        this.srv = srv;
    }
    onkeydown(e) {
        if (this.srv.keydownCode(e)) {
            if (!this.srv.ifIndexOfFlaot(e, true)) {
                return false;
            }
            if (e.key == ",") {
                return false;
            }
            if (e.key !== '.') {
                if (!this.srv.isNaNAndSpaceFn(e, true)) {
                    return false;
                }
            }
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^\d.,]/g, '');
        let value = e.target.value;
        if (value.indexOf('.') === -1) {
            if (value !== "") {
                e.target.value = this.fmoney(value);
            }
        }
        else {
            let tempValue = value.split('.');
            let newValueOne = this.fmoney(tempValue[0].replace(/\,/g, '')), newValueTwo = tempValue[1];
            if (newValueTwo.length > 2) {
                newValueTwo = newValueTwo.slice(0, newValueTwo.length - 1);
            }
            e.target.value = newValueOne + '.' + newValueTwo;
        }
        this.control.viewToModelUpdate(e.target.value);
    }
    onblur(e) {
        e.target.value = this.srv.blurFn(e);
        let tempValue = e.target.value.split('.');
        if (tempValue[1].length < 2) {
            e.target.value = e.target.value + '0';
        }
        this.control.viewToModelUpdate(e.target.value);
    }
    fmoney(s) {
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")) + "";
        var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
        let t = "";
        for (let i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return t.split("").reverse().join("");
    }
};
OnlyMoneyDirective = __decorate([
    core_1.Directive({
        selector: '[onlyMoney]',
        host: {
            '(keyup)': 'onkeyup($event)',
            '(keydown)': 'onkeydown($event)',
            '(blur)': 'onblur($event)'
        },
        providers: [forms_1.NgModel, collection_service_1.CollectionService],
    }),
    __metadata("design:paramtypes", [forms_1.NgModel, collection_service_1.CollectionService])
], OnlyMoneyDirective);
exports.OnlyMoneyDirective = OnlyMoneyDirective;
// ---------- end 只能输入货币数字 ----------

//# sourceMappingURL=collection.directive.js.map
