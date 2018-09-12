import { ItemEventData } from "ui/list-view"
import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Essentials",
    moduleId: module.id,
    templateUrl: "./essentials.component.html",
    styleUrls: ['./essentials.component.css']
})
export class EssentialsComponent implements OnInit {

    eye: any = String.fromCharCode(parseInt("f06e", 16));
    eyeslash: any = String.fromCharCode(parseInt("f070", 16));

    isBusy: boolean = true;

    progressValue: number = 80;

    countries: { name: string, imageSrc: string }[] = [
        { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
        { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
        { name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
        { name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
        { name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
        { name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
        { name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
        { name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
        { name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
        { name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
        { name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
        { name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
        { name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
        { name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
        { name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
        { name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
        { name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
    ];

    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
    }
    onButtonTap(): void {
        alert("Button was pressed")
    }


    constructor(
        private page: Page,
        private routerExtensions: RouterExtensions
    ) {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    
    essentials: { showDetails: boolean, title: string, summary: string }[] = [
        { showDetails: false, title: "Button", summary: "The Button widget provides a standard button widget that reacts to a tap event." },
        { showDetails: false, title: "Label", summary: "The Label widget provides a text label that shows read-only text." },
        { showDetails: false, title: "Image", summary: "The Image widget shows an image. You can load the image from an ImageSource or from a URL." },
        { showDetails: false, title: "Slider", summary: "The Slider widget provides a slider that you can use to pick a numeric value within a configurable range." },
        { showDetails: false, title: "Switch", summary: "The Switch widget provides a two-state toggle switch from which you can choose between two options." },
        { showDetails: false, title: "Text view", summary: "The TextView widget provides an editable multi-line text view.You can use it to show multi-line text and implement text editing." },
        { showDetails: false, title: "List View", summary: "The ListView shows items in a vertically scrolling list. You can set an itemTemplate to specify how each item in the list should be displayed." },
        { showDetails: false, title: "Progress", summary: "The Progress widget is a visual bar indicator of a progress in a operation. It shows a bar representing the current progress of the operation." },
        { showDetails: false, title: "Activity Indicator", summary: "The ActivityIndicator widget is a visual spinner indicator which shows that a task is in progress." }
    ];
}
