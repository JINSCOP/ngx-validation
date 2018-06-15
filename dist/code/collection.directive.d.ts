import { NgModel } from '@angular/forms';
import { CollectionService } from './collection.service';
export declare class OnlyDateDirective {
    control: NgModel;
    private srv;
    constructor(control: NgModel, srv: CollectionService);
    onkeydown(e: any): boolean;
    /** @internal */
    onkeyup(e: any): void;
}
export declare class OnlyDateTimeDirective {
    control: NgModel;
    private srv;
    constructor(control: NgModel, srv: CollectionService);
    onkeydown(e: any): boolean;
    onkeyup(e: any): void;
}
export declare class OnlyEmailDirective {
    control: NgModel;
    color: any;
    constructor(control: NgModel);
    onfocus(e: any): void;
    onblur(e: any): void;
}
export declare class OnlyIntDirective {
    control: NgModel;
    private srv;
    constructor(control: NgModel, srv: CollectionService);
    onkeydown(e: any): boolean;
    onkeyup(e: any): void;
}
export declare class OnlyFloatDirective {
    control: NgModel;
    private srv;
    constructor(control: NgModel, srv: CollectionService);
    onkeydown(e: any): boolean;
    onkeyup(e: any): void;
    onblur(e: any): void;
}
export declare class OnlyNumberDirective {
    control: NgModel;
    private srv;
    constructor(control: NgModel, srv: CollectionService);
    onkeydown(e: any): boolean;
    onkeyup(e: any): void;
}
export declare class OnlyChDirective {
    control: NgModel;
    constructor(control: NgModel);
    onkeydown(e: any): boolean;
    onkeyup(e: any): void;
}
export declare class OnlyEnDirective {
    control: NgModel;
    constructor(control: NgModel);
    onkeydown(e: any): boolean;
    onkeyup(e: any): void;
}
export declare class OnlyEnNumDirective {
    control: NgModel;
    constructor(control: NgModel);
    onkeydown(e: any): boolean;
    onkeyup(e: any): void;
}
export declare class OnlyEnNumSingDirective {
    control: NgModel;
    constructor(control: NgModel);
    onkeydown(e: any): boolean;
    onkeyup(e: any): void;
}
export declare class OnlyMoneyDirective {
    control: NgModel;
    private srv;
    constructor(control: NgModel, srv: CollectionService);
    onkeydown(e: any): boolean;
    onkeyup(e: any): void;
    onblur(e: any): void;
    fmoney(s: any): string;
}
//# sourceMappingURL=collection.directive.d.ts.map