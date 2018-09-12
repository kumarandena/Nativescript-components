
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LayoutRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        LayoutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LayoutModule { }