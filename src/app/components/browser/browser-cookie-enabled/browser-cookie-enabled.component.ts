import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'browser-cookie-enabled',
  templateUrl: './browser-cookie-enabled.component.html',
  styleUrls: ['./browser-cookie-enabled.component.css']
})
export class BrowserCookieEnabledComponent implements OnInit {

  @ViewChild('bce') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.innerHTML = "Browser Cookie Enabled: " + navigator.cookieEnabled;

  }

}
