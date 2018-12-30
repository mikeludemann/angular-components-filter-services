import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() mainclass: string;
  @Input() containerclass: string;
  @Input() inputclass: string;
  @Input() id: string;
  @Input() type: string;
  @Input() name: string;
  @Input() value: string;
  @Input() placeholder?: string;

  constructor() { }

  ngOnInit() {
  }

}
