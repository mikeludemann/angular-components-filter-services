import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'browser-code-name',
  templateUrl: './browser-code-name.component.html',
  styleUrls: ['./browser-code-name.component.css']
})
export class BrowserCodeNameComponent implements OnInit {

  @ViewChild('bcn') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.innerHTML = "Browser Code Name: " + navigator.appCodeName;

  }

}
