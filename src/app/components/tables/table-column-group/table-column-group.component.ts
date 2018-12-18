import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-column-group',
  templateUrl: './table-column-group.component.html',
  styleUrls: ['./table-column-group.component.css']
})
export class TableColumnGroupComponent implements OnInit {

  @Input() id: string;
  @Input() class: string;
  @Input() size: string;

  constructor() { }

  ngOnInit() {
  }

}
