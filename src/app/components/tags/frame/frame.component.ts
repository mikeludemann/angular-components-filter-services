import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'frame-mode',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  @Input() border: string;
  @Input() urllong: string;
  @Input() source: string;
  @Input() heigth: string;
  @Input() width: string;
  @Input() name: string;
  @Input() noresize: string;
  @Input() scrollformat: string;

  constructor() { }

  ngOnInit() {
  }

}
