import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'meter-mode',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css']
})
export class MeterComponent implements OnInit {

  @Input() value: string;
  @Input() min: string;
  @Input() max: string;

  constructor() { }

  ngOnInit() {
  }

}
