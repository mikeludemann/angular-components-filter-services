import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'frameset-mode',
  templateUrl: './frameset.component.html',
  styleUrls: ['./frameset.component.css']
})
export class FramesetComponent implements OnInit {

  @Input() cols: string;
  @Input() rows: string;

  constructor() { }

  ngOnInit() {
  }

}
