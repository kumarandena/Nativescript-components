
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";

import { DatavizRoutingModule } from "./dataviz-routing.module";
import { DatavizComponent } from "./dataviz.component";

@NgModule({
    imports: [
        NativeScriptUIChartModule,
        NativeScriptUIGaugeModule,
        
        NativeScriptCommonModule,
        DatavizRoutingModule
    ],
    declarations: [
        DatavizComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DatavizModule { }