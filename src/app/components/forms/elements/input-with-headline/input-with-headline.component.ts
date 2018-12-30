import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-with-headline',
  templateUrl: './input-with-headline.component.html',
  styleUrls: ['./input-with-headline.component.css']
})
export class InputWithHeadlineComponent implements OnInit {

  @Input() mainclass: string;
  @Input() containerclass: string;
  @Input() headlineclass: string;
  @Input() inputclass: string;
  @Input() id: string;
  @Input() headline: string;
  @Input() type: string;
  @Input() name: string;
  @Input() value: string;
  @Input() placeholder?: string;

  constructor() { }

  ngOnInit() {
  }

}
