import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
	selector: "About",
	moduleId: module.id,
	templateUrl: "./about.component.html",
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    pieSource: { Component: string, Amount: number }[] = [
        { Component: "Essentials", Amount: 9 },
        { Component: "Data Entry", Amount: 6 },
        { Component: "Bars", Amount: 3 },
        { Component: "Data Viz", Amount: 11 },
		{ Component: "Layout", Amount: 7 },
		{ Component: "Navigation", Amount: 2 },
		{ Component: "Other", Amount: 5 },
		{ Component: "Dialogs", Amount: 5 },
		{ Component: "plugins", Amount: 3 }
    ];


	constructor(
		private page: Page,
		private routerExtensions: RouterExtensions
	) {
		this.page.actionBarHidden = true;

	}

	ngOnInit(): void {
	}

	public goBack() {
		this.routerExtensions.back();
	}
}