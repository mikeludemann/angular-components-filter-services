import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'output-mode',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input() name: string;
  @Input() form: string;
  @Input() for: string;

  constructor() { }

  ngOnInit() {
  }

}
