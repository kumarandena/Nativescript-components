import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "Layout",
    moduleId: module.id,
    templateUrl: "./layout.component.html",
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
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

    layout: { showDetails: boolean, title: string, summary: string }[] = [
        { showDetails: false, title: "Absolute Layout", summary: "The AbsoluteLayout is the simplest layout in NativeScript. It uses absolute left-top coordinates to position its children. The AbsoluteLayout will not enforce any layout constraints on its children and will not resize them at runtime when its size changes." },
        { showDetails: false, title: "Dock Layout", summary: "The DockLayout is a layout that provides a docking mechanism for child elements to the left, right, top, bottom or center of the layout. To define the docking side of a child element, use its dock property. To dock a child element to the center of the DockLayout, it must be the last child of the DockLayout and the stretchLastChild property of the DockLayout must be set to true." },
        { showDetails: false, title: "Grid Layout", summary: "The GridLayout is a layout that arranges its child elements in a table structure of rows and columns. A cell can contain multiple child elements, they can span over multiple rows and columns, and even overlap each other. \n The GridLayout has one column and one row by default. To add additional columns and rows, you have to specify column definition items (separated by commas) to the columns property and row definition items (separated by commas) to the rows property of the GridLayout. \n The width of a column and the height of a row can be specified as an absolute amount of pixels, as a percentage of the available space or automatically:" },
        { showDetails: false, title: "Flexbox Layout", summary: "The FlexboxLayout is a non-conforming implementation of the CSS Flexible Box Layout based on an existing Apache-2 licensed flexbox implementation hosted on github.com/google/flexbox-layout. \n • In the flex layout model, the children of a flex container can be laid out in any direction, and can “flex” their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated. Nesting of these boxes (horizontal inside vertical, or vertical inside horizontal) can be used to build layouts in two dimensions." },
        { showDetails: false, title: "Stack Layout", summary: "The StackLayout stacks its child elements below or beside each other, depending on its orientation. It is very useful to create lists." },
        { showDetails: false, title: "Wrap Layout", summary: "The WrapLayout is similar to the StackLayout, but it does not just stack all child elements to one column/row, it wraps them to new columns/rows if no space is left. The WrapLayout is often used with items of the same size, but this is not a requirement." },
        { showDetails: false, title: "Scroll View", summary: "The ScrollableView component allows you to display a scrollable area in your application, which has content that is larger than its bounds. The ScrollView has an orientation property, which allows you to set different orientations to the view." }
    ];
}
