import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'unsorting-list',
  templateUrl: './unsorting-list.component.html',
  styleUrls: ['./unsorting-list.component.css']
})
export class UnsortingListComponent implements OnInit {

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
