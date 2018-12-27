import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'analytics-advertising',
  templateUrl: './analytics-advertising.component.html',
  styleUrls: ['./analytics-advertising.component.css']
})
export class AnalyticsAdvertisingComponent implements OnInit {

  @Input() headline: string;

  constructor() { }

  ngOnInit() {
  }

}
