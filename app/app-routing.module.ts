import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "essentials", loadChildren: "./pages/essentials/essentials.module#EssentialsModule" },
    { path: "dataentry", loadChildren: "./pages/dataentry/dataentry.module#DataentryModule" },
    { path: "bars", loadChildren: "./pages/bars/bars.module#BarsModule" },
    { path: "dataviz", loadChildren: "./pages/dataviz/dataviz.module#DatavizModule" },
    { path: "layout", loadChildren: "./pages/layout/layout.module#LayoutModule" },
    { path: "navigation", loadChildren: "./pages/navigation/navigation.module#NavigationModule" }, 
    { path: "other", loadChildren: "./pages/other/other.module#OtherModule" },
    { path: "dialogs", loadChildren: "./pages/dialogs/dialogs.module#DialogsModule" },
    { path: "plugins", loadChildren: "./pages/plugins/plugins.module#PluginsModule" },
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
