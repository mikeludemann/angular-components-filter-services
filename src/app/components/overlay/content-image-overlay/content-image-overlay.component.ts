import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'content-image-overlay',
  templateUrl: './content-image-overlay.component.html',
  styleUrls: ['./content-image-overlay.component.css']
})
export class ContentImageOverlayComponent implements OnInit {

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

  @ViewChild("imageoverlay") el: ElementRef;

  container = {
    "position": "relative"
  };

  main = {
    "position": "absolute",
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
    "transition": "all 0.3s ease"
  };

  icon = {
    "color": "white",
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "transform": "translate(-50%, -50%)",
    "text-align": "center",
    "width": "100%",
    "height": "100%"
  };

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.style.width = this.size + "px";
    this.el.nativeElement.style.height = this.size + "px";
    this.el.nativeElement.style.borderRadius = this.borderradius + "%";
    this.el.nativeElement.style.fontSize = this.textsize + "px";
    this.el.nativeElement.style.color = this.color;
    this.el.nativeElement.style.backgroundColor = this.bgcolor;

    this.el.nativeElement.children[0].style.width = this.size + "px";

    this.el.nativeElement.children[1].style.width = this.size + "px";
    this.el.nativeElement.children[1].style.height = this.size + "px";
    this.el.nativeElement.children[1].style.borderRadius = this.borderradius + "%";
    this.el.nativeElement.children[1].style.opacity = 0;

    this.el.nativeElement.children[1].children[0].style.fontSize = (Number(this.size) / 4) + "px";
    this.el.nativeElement.children[1].children[0].style.borderRadius = this.borderradius + "%";

  }

  handleVisible(visible: number) {
    this.el.nativeElement.children[1].style.opacity = visible;
  }

}
