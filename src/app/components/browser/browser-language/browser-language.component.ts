import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'browser-language',
  templateUrl: './browser-language.component.html',
  styleUrls: ['./browser-language.component.css']
})
export class BrowserLanguageComponent implements OnInit {

  @ViewChild('bl') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.innerHTML = "Browser Languae: " + navigator.language;

  }

}
