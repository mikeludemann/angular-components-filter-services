import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-direction-list',
  templateUrl: './direction-list.component.html',
  styleUrls: ['./direction-list.component.css']
})
export class DirectionListComponent implements OnInit {

  @Input() ngStyle: { [key: string]: string; }

  list = {
    'list-style-type': 'none',
    'padding-left': '0px',
    'margin': '0px'
  };

  constructor() { }

  ngOnInit() {
  }

}
