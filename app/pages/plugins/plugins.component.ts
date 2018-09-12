import { Component, OnInit } from "@angular/core";
import { ImageAsset } from "image-asset";
var bluetooth = require("../../nativescript-bluetooth");
var Toast = require("../../nativescript-toast");
import * as camera from "nativescript-camera";
import { isAndroid, isIOS, device } from "platform";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
	selector: "Plugins",
	moduleId: module.id,
	templateUrl: "./plugins.component.html",
	styleUrls: ['./plugins.component.css']
})
export class PluginsComponent implements OnInit {
	eye: any = String.fromCharCode(parseInt("f06e", 16));
	eyeslash: any = String.fromCharCode(parseInt("f070", 16));
	deleteicon: any = String.fromCharCode(parseInt("f014", 16));

	devices: { UUID: string, name: string, RSSI: string, state: string }[] = [];

	pictureFromCamera: ImageAsset;

	constructor() {
	}

	ngOnInit(): void {
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>app.getRootView();
		sideDrawer.showDrawer();
	}

	plugins: { showDetails: boolean, title: string, summary: string }[] = [
		{ showDetails: false, title: "NativeScript Bluetooth Plugin", summary: "A NativeScript Bluetooth Plugin for Android and iOS apps." },
		{ showDetails: false, title: "NativeScript Toast Plugin", summary: "A NativeScript Toast Plugin for Android and iOS apps." },
		{ showDetails: false, title: "NativeScript Camera Plugin", summary: "A NativeScript Camera Plugin for Android and iOS apps." }
	];

	onScanTap(): void {
		console.log("Start scanning");
		bluetooth.startScanning({
			serviceUUIDs: [],
			seconds: 2,
			onDiscovered: (peripheral) =>
				this.devices.push({ UUID: peripheral.UUID, name: peripheral.name, RSSI: peripheral.RSSI, state: peripheral.state })
		}).then(
			() => console.log("scanning complete"),
			(err) => console.log("error while scanning: " + err)
		);
	}

	onDeleteTap(): void {
		if (this.devices.length != 0) {
			this.devices.length = 0;
			Toast.makeText("Scanned devices list cleared 👍🏻!").show();
		}
		else {
			Toast.makeText("No items in the devices list 😊!").show();
		}
	}

	deletePicture(): void {
		this.pictureFromCamera = null;
		if (isAndroid) {
			Toast.makeText("Picture cleared 👍🏻!").show();
		}
		else {
			alert("Picture cleared 👍🏻!");
		}
	}
	
	onToastTap() {
		if (isIOS) {
			alert("Not working on IOS yet!")
		} else {
			Toast.makeText("Happy Nativescripting 😉!").show();
		}
		
	}

	onLongToastTap() {
		if (isIOS) {
			alert("Not working on IOS yet!")
		} else {
			Toast.makeText("Happy Nativescripting for long time 😜!", "long").show();
		}
	}

	takePicture() {
		camera.takePicture()
			.then((imageAsset) => {
				this.pictureFromCamera = imageAsset;
				if (isAndroid) {
					Toast.makeText("Great Picture 👌!", "long").show();
				}
				else {
					alert("Great Picture 👌!");
				}
				console.log(JSON.stringify(imageAsset));
			}).catch((err) => {
				console.log("Error -> " + err.message);
			});
	}
}