import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() ngStyle: { [key: string]: string; }

  @Input() imageurl: string;
  @Input() imagetext: string;
  @Input() producttitle: string;
  @Input() price: string;

  @ViewChild('product') el: ElementRef;

  container = {
    "margin": "10px 0px"
  };

  image = {
    "width": "100%"
  };

  link = {
    "color": "#fff",
    "text-decoration": "none"
  };

  title = {
    "color": "#999",
    "font-size": "18px"
  };

  card = {
    "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    "max-width": "300px",
    "margin": "auto",
    "text-align": "center",
    "position": "relative"
  };

  button = {
    "border": "none",
    "outline": "0",
    "display": "inline-block",
    "padding": "10px 0px",
    "color": "#fff",
    "background-color": "#000",
    "text-align": "center",
    "cursor": "pointer",
    "width": "100%",
    "font-size": "18px",
    "transition": "all 1s ease-in-out"
  };

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {

  }

  animate(visible: number) {
    this.el.nativeElement.children[3].children[0].style.opacity = visible;
  }

}
