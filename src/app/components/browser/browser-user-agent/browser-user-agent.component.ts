import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'browser-user-agent',
  templateUrl: './browser-user-agent.component.html',
  styleUrls: ['./browser-user-agent.component.css']
})
export class BrowserUserAgentComponent implements OnInit {

  @ViewChild('bua') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.innerHTML = "User Agent: " + navigator.userAgent;

  }

}
