import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sorting-list',
  templateUrl: './sorting-list.component.html',
  styleUrls: ['./sorting-list.component.css']
})
export class SortingListComponent implements OnInit {

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
