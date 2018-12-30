import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-with-datalist',
  templateUrl: './input-with-datalist.component.html',
  styleUrls: ['./input-with-datalist.component.css']
})
export class InputWithDatalistComponent implements OnInit {

  @Input() mainclass: string;
  @Input() containerclass: string;
  @Input() inputclass: string;
  @Input() id: string;
  @Input() type: string;
  @Input() name: string;
  @Input() value: string;
  @Input() placeholder?: string;
  @Input() datalistID: string;

  constructor() { }

  ngOnInit() {
  }

}
