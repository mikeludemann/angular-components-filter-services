import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.css']
})
export class TableFooterComponent implements OnInit {
  
  @Input() id: string;
  @Input() class: string;

  constructor() { }

  ngOnInit() {
  }

}
