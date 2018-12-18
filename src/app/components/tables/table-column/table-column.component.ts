import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-column',
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.css']
})
export class TableColumnComponent implements OnInit {

  @Input() id: string;
  @Input() class: string;
  @Input() headers: string;
  @Input() columnsize: string;
  @Input() rowsize: string;

  constructor() { }

  ngOnInit() {
  }

}
