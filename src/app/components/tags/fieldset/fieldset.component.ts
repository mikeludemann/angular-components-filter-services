import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fieldset-mode',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css']
})
export class FieldsetComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() formname: string
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
