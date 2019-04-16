import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'google-charts',
	templateUrl: './google-charts.component.html',
	styleUrls: ['./google-charts.component.css']
})
export class GoogleChartsComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() settings: object;
	@Input() chartoptions: object;
	@Input() datas: any;

	@ViewChild("charts") el: ElementRef;

	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit() {

    google.charts.load('current', this.settings);
    google.charts.setOnLoadCallback(drawChart);
    
    var mainOptions = this.chartoptions;
    var mainDatas = this.datas;
    
    function drawChart() {

      var data = google.visualization.arrayToDataTable(mainDatas);

      var options = mainOptions;

      var chart = new google.visualization.PieChart(document.getElementById('chart'));

      chart.draw(data, options);
    }

	}

}
