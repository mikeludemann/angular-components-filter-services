import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'image-content-overlay',
  templateUrl: './image-content-overlay.component.html',
  styleUrls: ['./image-content-overlay.component.css']
})
export class ImageContentOverlayComponent implements OnInit {

  @Input() ngStyle: { [key: string]: string; }

  @Input() containerclass: string;
  @Input() maintext: string;
  @Input() alttext: string;
  @Input() source: string;
  @Input() size: string;
  @Input() borderradius: string;
  @Input() textsize: string;
  @Input() color: string;
  @Input() bgcolor: string;

  container = {
    "position": "relative"
  };

  main = {
    "position": "relative",
    "top": "50%",
    "left": "50%",
    "transform": "translate(-50%, -50%)",
    "text-align": "center"
  };

  overlay = {
    "position": "absolute",
    "top": "0%",
    "bottom": "0%",
    "left": "0%",
    "right": "0%",
    "transition": "all 0.3s ease"
  };

  txt = {
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "transform": "translate(-50%, -50%)",
    "text-align": "center"
  };

  icon = {
    "color": "white",
    "width": "100%",
    "height": "100%",
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "transform": "translate(-50%, -50%)",
    "text-align": "center"
  };

  @ViewChild("imagecontentoverlay") el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.style.width = this.size + "px";
    this.el.nativeElement.style.height = this.size + "px";
    this.el.nativeElement.style.borderRadius = this.borderradius + "%";

    this.el.nativeElement.children[0].style.width = this.size + "px";
    this.el.nativeElement.children[0].style.height = this.size + "px";
    this.el.nativeElement.children[0].style.borderRadius = this.borderradius + "%";

    this.el.nativeElement.children[0].children[0].style.borderRadius = this.borderradius + "%";
    this.el.nativeElement.children[0].children[0].style.fontSize = (Number(this.size) / 4) + "px";
    
    this.el.nativeElement.children[1].style.width = this.size + "px";
    this.el.nativeElement.children[1].style.height = this.size + "px";
    this.el.nativeElement.children[1].style.borderRadius = this.borderradius + "%";
    this.el.nativeElement.children[1].style.color = this.color;
    this.el.nativeElement.children[1].style.backgroundColor = this.bgcolor;
    this.el.nativeElement.children[1].style.fontSize = this.textsize + "px";
    this.el.nativeElement.children[1].style.opacity = 0;

  }

  handleVisible(visible: number) {
    this.el.nativeElement.children[1].style.opacity = visible;
  }

}
