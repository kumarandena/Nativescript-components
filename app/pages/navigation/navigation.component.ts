import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "Navigation",
    moduleId: module.id,
    templateUrl: "./navigation.component.html",
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    eye: any = String.fromCharCode(parseInt("f06e", 16));
    eyeslash: any = String.fromCharCode(parseInt("f070", 16));

    constructor(private page: Page) {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    navigation: { showDetails: boolean, title: string, summary: string }[] = [
        { showDetails: false, title: "Side Drawer", summary: "The SideDrawer component (known as RadSideDrawer in code) allows you to follow a popular application pattern and show a hidden view which contains navigation UI or common settings. With SideDrawer you may \n • Embed any content inside the sliding panel from text and icons, to sliders and filters. \n • Set the control to slide in from any of the four sides of the screen. \n • Pick from a large set of polished out-of-the-box transition modes \n • Achieve programmatic control over the state of the side drawer. \n • Choose to cover the navigation or action bar." },
        { showDetails: false, title: "Tab View", summary: "Using a TabView inside an Angular app requires some special attention about how to provide title, iconSource and content (view) of the TabItem. In a pure NativeScript application, TabView has an items property which could be set via XML to an array of TabViewItems (basically, an array of objects with title and view properties). \n \n However, NativeScript-Angular does not support nested properties in its HTML template, so adding TabViewItem to TabView is a little bit different. \n \n NativeScript-Angular provides a custom Angular directive that simplifies the way native TabView should be used." }
    ];
}
