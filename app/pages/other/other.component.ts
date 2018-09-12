import * as accelerometer from "nativescript-accelerometer";
let accelerometerListening = false;
import * as geoLocation from "nativescript-geolocation";
import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "Other",
    moduleId: module.id,
    templateUrl: "./other.component.html",
    styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

    eye: any = String.fromCharCode(parseInt("f06e", 16));
    eyeslash: any = String.fromCharCode(parseInt("f070", 16));
    
    accelerometerValues: any;

    startAccelerometer(): void {
        if (accelerometerListening) {
            accelerometer.stopAccelerometerUpdates();
        }
        accelerometer.startAccelerometerUpdates(data => {
            accelerometerListening = true;
            this.accelerometerValues = data;
        }, {
                sensorDelay: "ui"
            });
    }

    currentGeoLocation: any;

    enableLocationServices(): void {
        geoLocation.isEnabled().then(enabled => {
            if (!enabled) {
                geoLocation.enableLocationRequest().then(() => this.showLocation());
            } else {
                this.showLocation();
            }
        });
    }

    private showLocation(): void {
        geoLocation.watchLocation(location => {
            this.currentGeoLocation = location;
        }, error => {
            alert(error);
        }, {
                desiredAccuracy: 3,
                updateDistance: 10,
                minimumUpdateTime: 1000 * 1
            });
    }

    htmlString: string = "<span><h1>HtmlView demo in <font color=\"blue\">NativeScript</font> App</h1></span>";


    constructor(private page: Page) {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    others: { showDetails: boolean, title: string, summary: string }[] = [
        { showDetails: false, title: "Calendar", summary: "RadCalendar for NativeScript is based on the corresponding native calendar components from the Progress UI for iOS and Progress UI for Android suites. It exposes a unified API covering all major features coming from the native components like: \n • inline events \n • different view modes \n • cells customization \n • selection" },
        { showDetails: false, title: "Html View", summary: "The HtmlView control represents a view with HTML content. Use this component when you want to show static HTML content. For more advanced scenarios and for dynamic content use WebView." },
        { showDetails: false, title: "Web View", summary: "The WebView component is used to display web content within your application. You use the control by providing a src attribute that points at a URL or a local HTML file." },
        { showDetails: false, title: "Location", summary: " IMPORTANT: Starting with NativeScript 1.5.0, the built-in Location module is deprecated. To implement geolocation in your apps, use the nativescript-geolocation plugin, available via npm. This plugin provides an API similar to the W3C Geolocation API. \n \n• The most important difference between the deprecated module and the new plugin is that location monitoring via the plugin returns an id that you can use to stop location monitoring. The nativescript-geolocation plugin also uses an accuracy criteria approach to deliver geolocation. This means that getting a location is powered by the most accurate location provider that is available. \n • For example, if a GPS signal is available and the GPS provider is enabled, the plugin uses GPS; if GPS is not connected, the device falls back to other available providers such as Wi-Fi networks or cell towers)." },
        { showDetails: false, title: "Accelerometer", summary: "The 'nativescript-accelerometer' plugin will help you to access the accelerometer sensor of the mobile device." }
    ];
}
