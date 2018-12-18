import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {
  
  @Input() id: string;
  @Input() class: string;

  constructor() { }

  ngOnInit() {
  }

}
