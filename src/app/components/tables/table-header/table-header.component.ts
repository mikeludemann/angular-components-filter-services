import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {

  @Input() id: string;
  @Input() class: string;
  @Input() abbreviation: string;
  @Input() headers: string;
  @Input() columnsize: string;
  @Input() rowsize: string;
  @Input() scope: string;

  constructor() { }

  ngOnInit() {
  }

}
