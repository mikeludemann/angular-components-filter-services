import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-caption',
  templateUrl: './table-caption.component.html',
  styleUrls: ['./table-caption.component.css']
})
export class TableCaptionComponent implements OnInit {

  @Input() id: string;
  @Input() class: string;

  constructor() { }

  ngOnInit() {
  }

}
