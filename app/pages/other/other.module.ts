
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { OtherRoutingModule } from "./other-routing.module";
import { OtherComponent } from "./other.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        OtherRoutingModule
    ],
    declarations: [
        OtherComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OtherModule { }