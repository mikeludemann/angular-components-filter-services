import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-mode',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  @Input() url: string;
  @Input() target: string;

  constructor() { }

  ngOnInit() {
  }

}
