import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "Dataentry",
    moduleId: module.id,
    templateUrl: "./dataentry.component.html",
    styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {
    album: { bandName: string, albumName: string, year: string, owned: boolean, myRating: string} = {
        bandName: "Ed Sheeran",
        albumName: "X",
        year: "2017",
        owned: true,
        myRating: "9.5"
    };

    currentDay: number = new Date().getDate();
    currentMonth: number = new Date().getMonth() + 1;
    currentYear: number = new Date().getFullYear();

    listPickerCountries: Array<string> = ["Australia", "Belgium", "Bulgaria", "Canada", "Switzerland",
        "China", "Czech Republic", "Germany", "Spain", "Ethiopia", "Croatia", "Hungary",
        "Italy", "Jamaica", "Romania", "Russia", "United States"];
    selectedListPickerIndex: number = 0;

    currentHour: number = new Date().getHours();
    currentMinute: number = new Date().getMinutes();

     autocompleteCountries: ObservableArray<TokenModel> = new ObservableArray<TokenModel>([
        new TokenModel("Australia", undefined),
        new TokenModel("Belgium", undefined),
        new TokenModel("Bulgaria", undefined),
        new TokenModel("Canada", undefined),
        new TokenModel("Switzerland", undefined),
        new TokenModel("China", undefined),
        new TokenModel("Czech Republic", undefined),
        new TokenModel("Germany", undefined),
        new TokenModel("Spain", undefined),
        new TokenModel("Ethiopia", undefined),
        new TokenModel("Croatia", undefined),
        new TokenModel("Hungary", undefined),
        new TokenModel("Italy", undefined),
        new TokenModel("Jamaica", undefined),
        new TokenModel("Romania", undefined),
        new TokenModel("Russia", undefined),
        new TokenModel("United States", undefined)
    ]);

    textFieldValue: string = "";


    constructor(private page: Page) {
        // this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    dataentry: { title: string, summary: string }[] = [
        { title: "Text Field", summary: "The TextField widget provides an editable single-line text field." },
        { title: "AutoComplete Text View", summary: "The AutoCompleteTextView component (known in code as RadAutoCompleteTextView), allows you to provide users with auto-completion for text entries - maybe you are filtering a list or providing an alternative to a multi-select input.With RadAutoCompleteTextView you put your users in control by reducing data entry requirements. You can specify different text-suggestion modes as well as define how those suggestions are displayed." },
        { title: "Time Picker", summary: "With the TimePicker widget, you can pick a time." },
        { title: "List Picker", summary: "With the ListPicker widget, you can pick a value from a list." },
        { title: "Date Picker", summary: "With the DatePicker control, you can pick a date." },
        { title: "Data Form", summary: "The DataForm component (known in code as RadDataForm), allows you to automatically create a form based on existing data.With RadDataForm, you can not only have forms created for you automatically, but you can easily customize those forms in your markup or with JavaScript. It's also very easy to add validation to your forms and group UI elements to make large forms more manageable." },
        ];
}
