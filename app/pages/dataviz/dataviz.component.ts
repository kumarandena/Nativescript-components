import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "Dataviz",
    moduleId: module.id,
    templateUrl: "./dataviz.component.html",
    styleUrls: ['./dataviz.component.css']
})
export class DatavizComponent implements OnInit {
    gaugeValue: number = 2;

    scatterSource: { Age: number, Salary: number, Spendings: number, Savings: number, Impact: number}[] = [
        { Age: 20, Salary: 10000, Spendings: 4500, Savings: 5500, Impact: 1 },
        { Age: 25, Salary: 12300, Spendings: 6500, Savings: 5200, Impact: 7 },
        { Age: 30, Salary: 14000, Spendings: 8500, Savings: 5500, Impact: 10 },
        { Age: 35, Salary: 18000, Spendings: 9500, Savings: 7500, Impact: 6 },
        { Age: 40, Salary: 19520, Spendings: 15540, Savings: 3800, Impact: 4 },
        { Age: 45, Salary: 20000, Spendings: 15500, Savings: 4500, Impact: 2 },
        { Age: 50, Salary: 24200, Spendings: 20500, Savings: 3700, Impact: 11 },
        { Age: 55, Salary: 24000, Spendings: 22500, Savings: 1500, Impact: 8 },
        { Age: 60, Salary: 22000, Spendings: 22500, Savings: 500, Impact: 1 },
        { Age: 65, Salary: 20000, Spendings: 20500, Savings: 10, Impact: 9 }
    ];

    pieSource: { Brand: string, Amount: number }[] = [
        { Brand: "Audi", Amount: 10 },
        { Brand: "Mercedes", Amount: 76 },
        { Brand: "Fiat", Amount: 60 },
        { Brand: "BMW", Amount: 24 },
        { Brand: "Crysler", Amount: 40 }
    ];

    financialSourceItems: { Date: string, Open: number, Close: number, Low: number, High: number }[] = [
        { Date: "01/6/2015", Open: 100, Close: 85, Low: 50, High: 139 },
        { Date: "27/7/2015", Open: 60, Close: 150, Low: 40, High: 159 },
        { Date: "18/8/2015", Open: 120, Close: 81, Low: 45, High: 141 },
        { Date: "19/9/2015", Open: 105, Close: 200, Low: 55, High: 250 }
    ];

    highDataModel: { Year: number; Amount: number; Impact: number; }[] = [
        { Year: 2000, Amount: 15, Impact: 1 },
        { Year: 1456, Amount: 13, Impact: 7 },
        { Year: 1866, Amount: 25, Impact: 10 },
        { Year: 1900, Amount: 5, Impact: 3 },
        { Year: 1700, Amount: 17, Impact: 4 },
         { Year: 1600, Amount: 20, Impact: 1 }
    ];

    middleDataModel: { Year: number; Amount: number; Impact: number; }[] = [
        { Year: 1200, Amount: 15, Impact: 1 },
        { Year: 1156, Amount: 13, Impact: 7 },
        { Year: 1000, Amount: 25, Impact: 10 },
        { Year: 900, Amount: 5, Impact: 3 },
        { Year: 700, Amount: 17, Impact: 4 },
        { Year: 600, Amount: 20, Impact: 1 }
    ];

    lowDataModel: { Year: number; Amount: number; Impact: number; }[] = [
        { Year: 200, Amount: 15, Impact: 1 },
        { Year: 456, Amount: 13, Impact: 7 },
        { Year: 366, Amount: 25, Impact: 10 },
        { Year: 100, Amount: 5, Impact: 3 },
        { Year: 340, Amount: 17, Impact: 4 },
        { Year: 135, Amount: 20, Impact: 1 }
    ];

    categoricalSource: { Country: string, Amount: number, SecondVal: number, ThirdVal: number }[] = [
        { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24 },
        { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25 },
        { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23 },
        { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24 },
        { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21 }
    ];


    showDetails: boolean = false;

    areaSource: { Category: string, Amount: number }[] = [
        { Category: "Mar", Amount: 51 },
        { Category: "Apr", Amount: 81 },
        { Category: "May", Amount: 89 },
        { Category: "Jun", Amount: 97 }
    ];

    areaSource2: { Category: string, Amount: number }[] = [
        { Category: "Mar", Amount: 60 },
        { Category: "Apr", Amount: 87 },
        { Category: "May", Amount: 91 },
        { Category: "Jun", Amount: 95 }
    ];


    constructor(private page: Page) {
    }

    ngOnInit(): void {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    dataviz: { showDetails: boolean, title: string, summary: string }[] = [
        { showDetails: false, title: "Area Chart", summary: "Area series work pretty much the same way as Line series with the only difference that the area between the categorical axis and the data points is filled with the corresponding color of the line. To use Area series, you need to initialize a RadCartesianChart, define a CategoricalAxis and LinearAxis and bind the series to a set of data objects." },
        { showDetails: false, title: "Bar Chart", summary: "Bar Series are categorical type of series that represent the objects from the data source as bars with different length. To use Bar series, you need to initialize a RadCartesianChart, define a CategoricalAxis and LinearAxis and bind the series to a set of data objects." },
        { showDetails: false, title: "Line Chart", summary: "LineSeries are categorical type of series that represent the objects from the data source as dots connected with a line. To use Line series, you need to initialize a RadCartesianChart, define a CategoricalAxis and LinearAxis and bind the series to a set of data objects." },
        { showDetails: false, title: "Bubble Chart", summary: "Bubble series are CategoricalSeries and are used in the context of a RadCartesianChart, CategoricalAxis and LinearAxis. Ontop of the requirements for a CategoricalAxis, BubbleSeries require an additional setup parameter which should come from the data source that defines the bubble size. The value for this parameter is supplied by defining the bubbleSizeProperty." },
        { showDetails: false, title: "CandleStick Chart", summary: "This series operates with a special kind of data in the form of four parameters defining the stock market - open, high, low, and close. The high and low values show the price range (the highest and lowest prices) over one unit of time. The open and close values indicate the opening and closing price of the stock for the corresponding period. Candlestick series have body, which has a different color depending on the value of open and close prices of the financial data point. The width of the candlestick body is determined by the period between 2 candlesticks and the range of the axis. You should use the majorStep property of LinearAxis to change the period between 2 candlesticks. Here is how to set up Candlestick series:" },
        { showDetails: false, title: "OHLC Chart", summary: "This series operates with a special kind of data in the form of four parameters defining the stock market - open, high, low, and close. The high and low values show the price range (the highest and lowest prices) over one unit of time. The open and close values indicate the opening and closing price of the stock for the corresponding period. The width of the ohlc bar is determined by the period between 2 bars and the range of the axis" },
        { showDetails: false, title: "Pie Chart", summary: "Unlike all other series, PieSeries do not require axes. They visualize each data point as pie slices with arc size directly proportional to the magnitude of the raw data point's value. Pie slices represent data in one direction contrasting with the other series which represent data in two dimensions." },
        { showDetails: false, title: "Donut Chart", summary: "extend PieSeries and work in pretty much the same way besides having an empty segment in the center compared to PieSeries" },
        { showDetails: false, title: "Scatter Chart", summary: "Scatter series are used in the context of a RadCartesianChart and two LinearAxis instances. Besides the setup requirements that come from CartesianSeries, ScatterSeries require an additional xProperty and yProperty parameters instead of valueProperty and categoryProperty." },
        { showDetails: false, title: "Spline Chart", summary: "SplineSeries are categorical type of series that visualize the data objects as a series of dots connected with a spline, i.e. a curved line segments. To use Spline series, you need to initialize a RadCartesianChart, define a CategoricalAxis and LinearAxis and bind the series to a set of data objects." },
        { showDetails: false, title: "Gauge", summary: "RadGauge is a highly customizable component that allows you to show the current status of a value within a range of upper and lower bounds, illustrate progress towards a goal or a summary of a fluctuating metric." }
];
}
