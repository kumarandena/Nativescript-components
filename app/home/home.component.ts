import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    contents: any;

    components: { category: string, url: string }[] = [
        { "category": "ESSENTIALS       👉", "url": "/essentials" },
        { "category": "DATA ENTRY       👉", "url": "/dataentry" },
        { "category": "BARS                  👉", "url": "/bars" },
        { "category": "DATA VIZ             👉", "url": "/dataviz" },
        { "category": "LAYOUT               👉", "url": "/layout" },
        { "category": "NAVIGATION      👉", "url": "/navigation" },
        { "category": "OTHER                👉", "url": "/other" },
        { "category": "DIALOGS                👉", "url": "/dialogs" },
        { "category": "PLUGINS              👉", "url": "/plugins" }
    ];
    
    constructor(
        private routerExtensions: RouterExtensions
    ) {
        this.contents = {
            "welcome": "I have prepared a few interactive demos for you!",
            "message": "To help you get started, I would like to guide you through the process of understanding all the NativeScript components 👇."
        }
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }
}
