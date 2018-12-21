import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'browser-version',
  templateUrl: './browser-version.component.html',
  styleUrls: ['./browser-version.component.css']
})
export class BrowserVersionComponent implements OnInit {

  @ViewChild('bv') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.innerHTML = "Browser Version: " + navigator.appVersion;

  }

}
