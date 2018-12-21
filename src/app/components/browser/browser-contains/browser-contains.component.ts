import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'browser-contains',
  templateUrl: './browser-contains.component.html',
  styleUrls: ['./browser-contains.component.css']
})
export class BrowserContainsComponent implements OnInit {

  @ViewChild('bc') el: ElementRef;

  constructor() { }

  ngOnInit() {

    var x: string = "";
    var text: string;

    if (typeof text === "string" && text != "") {

      if (navigator.userAgent.indexOf(text) > -1) {

        x += "Value is available";

        return true;

      } else {

        x += "Value is not available";

        return false

      }

    } else {

      x += "The value is not a string or is empty.";

    }

    this.el.nativeElement.innerHTML = x;

  }

}
