import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { PluginsRoutingModule } from "./plugins-routing.module";
import { PluginsComponent } from "./plugins.component";
@NgModule({
	imports: [
		NativeScriptCommonModule,
		PluginsRoutingModule,
		NativeScriptFormsModule
	],
	declarations: [
		PluginsComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class PluginsModule { }