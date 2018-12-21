import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'browser-geolocation',
  templateUrl: './browser-geolocation.component.html',
  styleUrls: ['./browser-geolocation.component.css']
})
export class BrowserGeolocationComponent implements OnInit {

  @ViewChild('bgeo') el: ElementRef;

  constructor() { }

  ngOnInit() {

    var x: string = "";

    if (navigator.geolocation) {

      x += "Browser Geolocation is supported and available";

    } else {

      x += "Browser Geolocation is not supported and not available";

    }

    this.el.nativeElement.innerHTML = x;

  }

}
