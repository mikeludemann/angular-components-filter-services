import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'links',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input() url: string;
  @Input() name: string;
  @Input() text: string;
  @Input() target: string;

  constructor() { }

  ngOnInit() {
  }

}
