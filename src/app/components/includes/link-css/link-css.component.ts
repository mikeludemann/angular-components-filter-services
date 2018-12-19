import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'link-css',
  templateUrl: './link-css.component.html',
  styleUrls: ['./link-css.component.css']
})
export class LinkCssComponent implements OnInit {

  @Input() rel: string;
  @Input() href: string;
  @Input() hreflang: string;
  @Input() sizes: string;
  @Input() title: string;
  @Input() type: string;
  @Input() target: string;
  @Input() rev: string;
  @Input() media: string;
  @Input() crossorigin: string;

  constructor() { }

  ngOnInit() {
  }

}
