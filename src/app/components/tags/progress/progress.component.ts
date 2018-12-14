import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'progress-mode',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  @Input() value: string;
  @Input() max: string;

  constructor() { }

  ngOnInit() {
  }

}
