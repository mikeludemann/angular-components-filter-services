import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() id: string;
  @Input() class: string;

  constructor() { }

  ngOnInit() {
  }

}
