import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bidirectional',
  templateUrl: './bidirectional.component.html',
  styleUrls: ['./bidirectional.component.css']
})
export class BidirectionalComponent implements OnInit {

  @Input() direction: string;

  constructor() { }

  ngOnInit() {
  }

}
