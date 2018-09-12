import { SearchBar } from "ui/search-bar";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";
import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "Bars",
    moduleId: module.id,
    templateUrl: "./bars.component.html",
    styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {
    eye: any = String.fromCharCode(parseInt("f06e", 16));
    eyeslash: any = String.fromCharCode(parseInt("f070", 16));

    defautactionbar: boolean = true;
    customactionbar: boolean = false;

    searchPhrase: string;
    onSearchSubmit(args): void {
        let searchBar = <SearchBar>args.object;
        console.log("You are searching for " + searchBar.text);
    }

    private getSegmentedBarItems = () => {
        let segmentedBarItem1 = new SegmentedBarItem();
        segmentedBarItem1.title = "Item 1";
        let segmentedBarItem2 = new SegmentedBarItem();
        segmentedBarItem2.title = "Item 2";
        return [segmentedBarItem1, segmentedBarItem2];
    }
    segmentedBarItems: Array<SegmentedBarItem> = this.getSegmentedBarItems();
    selectedBarIndex: number = 0;


    constructor(private page: Page) {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    bars: { showDetails: boolean, title: string, summary: string }[] = [
        { showDetails: false, title: "Action Bar", summary: "The ActionBar is NativeScript’s abstraction over the Android ActionBar and iOS NavigationBar. It represents a toolbar at the top of the activity window, and can have a title, application-level navigation, as well as other custom interactive items." },
        { showDetails: false, title: "Segmented Bar", summary: "With the SegmentedBar control, you can implement discrete selection." },
        { showDetails: false, title: "Search Bar", summary: "The SearchBar widget provides a user interface for entering search queries and submitting requests to the search provider." },
        ];
}
