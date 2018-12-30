import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-field',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() id: string;
  @Input() class: string;
  @Input() type: string;
  @Input() name: string;
  @Input() value: string;
  @Input() formID: string;
  @Input() formAction: string;
  @Input() formEnctype: string;
  @Input() formMethod: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
