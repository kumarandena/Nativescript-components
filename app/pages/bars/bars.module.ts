
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BarsRoutingModule } from "./bars-routing.module";
import { BarsComponent } from "./bars.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BarsRoutingModule
    ],
    declarations: [
        BarsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BarsModule { }