import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EssentialsComponent } from "./essentials.component";

const routes: Routes = [
    {
        path: "", component: EssentialsComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EssentialsRoutingModule { }