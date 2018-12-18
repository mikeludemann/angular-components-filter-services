import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-column-of-group',
  templateUrl: './table-column-of-group.component.html',
  styleUrls: ['./table-column-of-group.component.css']
})
export class TableColumnOfGroupComponent implements OnInit {

  @Input() id: string;
  @Input() class: string;
  @Input() size: string;

  constructor() { }

  ngOnInit() {
  }

}
