import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slick-slider',
  templateUrl: './slick-slider.component.html',
  styleUrls: ['./slick-slider.component.css']
})
export class SlickSliderComponent implements OnInit {

  @Input() ver: string;
  @Input() element: string;
  @Input() options: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var script = document.createElement("script");

    script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/" + this.ver + "/slick.js");

    document.getElementsByTagName("head").item(0).appendChild(script);

    var link = document.createElement("link");

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/" + this.ver + "/slick-theme.css");

    document.getElementsByTagName("head").item(0).appendChild(link);

    var link2 = document.createElement("link");

    link2.setAttribute("rel", "stylesheet");
    link2.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/" + this.ver + "/slick.css");

    document.getElementsByTagName("head").item(0).appendChild(link2);

    var slick_options = document.createElement("script");

    if (typeof this.options === "undefined") {
      this.options = "";
    }

    slick_options.innerHTML = '$(document).ready(function() { $(".' + this.element + '").slick(' + this.options + '); });';

    document.getElementsByTagName("head").item(0).appendChild(slick_options);

  }

}
