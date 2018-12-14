import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-mode',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
