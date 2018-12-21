import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'browser-product',
  templateUrl: './browser-product.component.html',
  styleUrls: ['./browser-product.component.css']
})
export class BrowserProductComponent implements OnInit {

  @ViewChild('bpr') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.innerHTML = "Browser Product: " + navigator.product;

  }

}
