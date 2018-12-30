import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'textarea-field',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  @Input() containerclass: string;
  @Input() textareaclass: string;
  @Input() maxlength: number;
  @Input() name: string;
  @Input() cols: number;
  @Input() rows: number;
  @Input() placeholder: string;
  @Input() required: boolean;
  @Input() autofocus: boolean;

  constructor() { }

  ngOnInit() {
  }

}
