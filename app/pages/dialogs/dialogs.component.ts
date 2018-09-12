import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { action } from "ui/dialogs";
import { alert } from "ui/dialogs";
import { confirm } from "ui/dialogs";
import { login, LoginResult } from "ui/dialogs";
import { prompt, PromptResult, inputType, PromptOptions } from "ui/dialogs";

@Component({
	selector: "Dialogs",
	moduleId: module.id,
	templateUrl: "./dialogs.component.html",
	styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {
	eye: any = String.fromCharCode(parseInt("f06e", 16));
	eyeslash: any = String.fromCharCode(parseInt("f070", 16));
	
	constructor() {
	}

	ngOnInit(): void {
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}

	dialogs: { showDetails: boolean, title: string, summary: string }[] = [
		{ showDetails: false, title: "Action Dialog", summary: "An Action Dialog will require a particular activity from the user." },
		{ showDetails: false, title: "Alert Dialog", summary: "An Alert Dialog will notify the user for an action that has happened." },
		{ showDetails: false, title: "Confirm Dialog", summary: "A Confirm Dialog will expect the user to accept or reject the action that is about the happen." },
		{ showDetails: false, title: "Login Dialog", summary: "A Login Dialog will wait for the user to input their credentials." },
		{ showDetails: false, title: "Prompt Dialog", summary: "A Prompt Dialog will request for an input." }
	];
	displayActionDialog() {
		let options = {
			title: "Race selection",
			message: "Choose your race",
			cancelButtonText: "Cancel",
			actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"]
		};

		action(options).then((result) => {
			console.log(result);
			alert(result);
		});
	}

	displayAlertDialog() {
		let options = {
			title: "Race selection",
			message: "Race chosen: Unicorn",
			okButtonText: "OK"
		};

		alert(options).then(() => {
			console.log("Race chosen!");
		});
	}

	displayConfirmDialog() {
		let options = {
			title: "Race selection",
			message: "Are you sure you want to be a Unicorn?",
			okButtonText: "Yes",
			cancelButtonText: "No",
			neutralButtonText: "Cancel"
		};

		confirm(options).then((result: boolean) => {
			console.log(result);
			alert(result);
		});
	}

	displayLoginDialog() {
		let options = {
			title: "Login",
			message: "Login",
			username: "john_doe",
			password: "",
			okButtonText: "Ok",
			cancelButtonText: "Cancel"
		};

		login(options).then((loginResult: LoginResult) => {
			console.log(loginResult.result);
			alert(loginResult.result);
		});
	}

	displayPromptDialog() {
		let options: PromptOptions = {
			title: "Hey There",
			defaultText: " Enter your mood ",
			message: "How you doing?",
			inputType: inputType.text,
			okButtonText: "OK",
			cancelButtonText: "Cancel",
			neutralButtonText: "Neutral",
			cancelable: true
		};

		prompt(options).then((result: PromptResult) => {
			console.log("Hello, " + result.text);
			alert("Hello, " + result.text);
		});
	}

}