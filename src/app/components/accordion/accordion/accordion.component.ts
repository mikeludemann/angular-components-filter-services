import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() ngStyle: { [key: string]: string; }

  @Input() id?: string;
  @Input() headline: string;

  @ViewChild('accordion') el: ElementRef;

  containerAccordion = {
    "transition": "0.4s",
    "width": "100%"
  }

  accordionHeadline = {
    "background-color": "#eee",
    "color": "#444",
    "cursor": "pointer",
    "padding": "20px",
    "width": "100%",
    "border": "none",
    "text-align": "left",
    "outline": "none",
    "font-size": "15px",
    "transition": "1s"
  }

  accordionPanel = {
    "padding": "10px",
    "background-color": "white",
    "display": "none",
    "overflow": "hidden",
    "transition": "max-height 0.5s ease-out",
    "border": "0.5px solid #000",
    "border-top": "0px solid #000"
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

    var container = document.getElementById(this.id);
    var acc = this.el.nativeElement;

    container.addEventListener("click", function () {

      var panel = acc.nextElementSibling;

      if (panel.style.display === "block") {

        panel.style.display = "none";

      } else {

        panel.style.display = "block";

      }

    });

  }

}
