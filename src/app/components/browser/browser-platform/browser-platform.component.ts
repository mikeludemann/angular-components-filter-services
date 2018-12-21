import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'browser-platform',
  templateUrl: './browser-platform.component.html',
  styleUrls: ['./browser-platform.component.css']
})
export class BrowserPlatformComponent implements OnInit {

  @ViewChild('bp') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.innerHTML = "Browser Platform: " + navigator.platform;

  }

}
