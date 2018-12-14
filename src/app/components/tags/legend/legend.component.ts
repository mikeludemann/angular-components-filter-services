import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'legend-mode',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css']
})
export class LegendComponent implements OnInit {

  @Input() position: string;

  constructor() { }

  ngOnInit() {
  }

}
