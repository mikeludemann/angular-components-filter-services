import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'image-overlay',
  templateUrl: './image-overlay.component.html',
  styleUrls: ['./image-overlay.component.css']
})
export class ImageOverlayComponent implements OnInit {

  @Input() ngStyle: { [key: string]: string; }

  @Input() containerclass: string;
  @Input() mainimage: string;
  @Input() mainalttext: string;
  @Input() image: string;
  @Input() alttext: string;
  @Input() borderradius: string;
  @Input() textsize: string;
  @Input() size: string;

  container = {
    "position": "relative"
  };

  main = {
    "position": "relative",
    "height": "auto",
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
    "transition": "all 0.3s ease",
  };

  icon = {
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "transform": "translate(-50%, -50%)",
    "text-align": "center"
  };

  mainicon = {
    "position": "relative",
    "top": "50%",
    "left": "50%",
    "transform": "translate(-50%, 0%)",
    "text-align": "center"
  };

  @ViewChild("imagetwooverlay") el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.style.width = this.size + "px";
    this.el.nativeElement.style.height = this.size + "px";
    this.el.nativeElement.style.fontSize = this.textsize + "px";
    this.el.nativeElement.style.borderRadius = this.borderradius + "%";

    this.el.nativeElement.children[0].style.width = this.size + "px";
    this.el.nativeElement.children[0].style.borderRadius = this.borderradius + "%";

    this.el.nativeElement.children[0].children[0].style.width = this.size + "px";
    this.el.nativeElement.children[0].children[0].style.height = this.size + "px";

    this.el.nativeElement.children[1].style.width = this.size + "px";
    this.el.nativeElement.children[1].style.height = this.size + "px";
    this.el.nativeElement.children[1].style.borderRadius = this.borderradius + "%";
    this.el.nativeElement.children[1].style.opacity = 0;

    this.el.nativeElement.children[1].children[0].style.width = this.size + "px";
    this.el.nativeElement.children[1].children[0].style.height = this.size + "px";

  }

  handleVisible(visible: number) {
    this.el.nativeElement.children[1].style.opacity = visible;
  }

}
