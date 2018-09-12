
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NavigationRoutingModule } from "./navigation-routing.module";
import { NavigationComponent } from "./navigation.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NavigationRoutingModule
    ],
    declarations: [
        NavigationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NavigationModule { }