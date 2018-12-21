import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'browser-name',
  templateUrl: './browser-name.component.html',
  styleUrls: ['./browser-name.component.css']
})
export class BrowserNameComponent implements OnInit {

  @ViewChild('bn') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.innerHTML = "Browser Name: " + navigator.appName;

  }

}
