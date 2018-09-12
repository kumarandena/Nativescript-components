
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EssentialsRoutingModule } from "./essentials-routing.module";
import { EssentialsComponent } from "./essentials.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EssentialsRoutingModule 
    ],
    declarations: [
        EssentialsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EssentialsModule { }