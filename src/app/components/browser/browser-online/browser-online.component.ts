import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'browser-online',
  templateUrl: './browser-online.component.html',
  styleUrls: ['./browser-online.component.css']
})
export class BrowserOnlineComponent implements OnInit {

  @ViewChild('bo') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.innerHTML = "Browser Online: " + navigator.onLine;

  }

}
