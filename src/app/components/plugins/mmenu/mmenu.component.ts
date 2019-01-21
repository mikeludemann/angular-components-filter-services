import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmenu',
  templateUrl: './mmenu.component.html',
  styleUrls: ['./mmenu.component.css']
})
export class MmenuComponent implements OnInit {

  @Input() ver: string;
  @Input() id: string;
  @Input() options: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var script = document.createElement("script");

    script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/" + this.ver + "/jquery.mmenu.all.js");

    document.getElementsByTagName("head").item(0).appendChild(script);

    var link = document.createElement("link");

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/" + this.ver + "/jquery.mmenu.all.css");

    document.getElementsByTagName("head").item(0).appendChild(link);

    var mmenu_options = document.createElement("script");

    if (typeof this.options === "undefined") {
      this.options = "";
    }

    mmenu_options.innerHTML = 'jQuery(document).ready(function($) { $("#' + this.id + '").mmenu(' + this.options + '); });';

    document.getElementsByTagName("body").item(0).appendChild(mmenu_options);
    
  }

}
