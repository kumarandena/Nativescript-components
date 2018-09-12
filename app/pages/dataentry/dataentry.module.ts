
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
import { DataentryRoutingModule } from "./dataentry-routing.module";
import { DataentryComponent } from "./dataentry.component";

@NgModule({
    imports: [
        NativeScriptUIAutoCompleteTextViewModule ,
        NativeScriptCommonModule,
        DataentryRoutingModule
    ],
    declarations: [
        DataentryComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DataentryModule { }