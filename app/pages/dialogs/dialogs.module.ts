import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { DialogsRoutingModule } from "./dialogs-routing.module";
import { DialogsComponent } from "./dialogs.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DialogsRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        DialogsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DialogsModule { }