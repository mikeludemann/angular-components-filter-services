import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iframe-mode',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {

  @Input() class: string;
  @Input() url: string;
  @Input() width: string;
  @Input() height: string;
  @Input() srcdoc: string;
  @Input() sandbox: string;

  constructor() { }

  ngOnInit() {
  }

}
