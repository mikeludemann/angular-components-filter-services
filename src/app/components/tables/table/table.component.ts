import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-mode',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() id: string;
  @Input() class: string;

  constructor() { }

  ngOnInit() {
  }

}
