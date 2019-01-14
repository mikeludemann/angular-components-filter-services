import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'google-font',
  templateUrl: './google-font.component.html',
  styleUrls: ['./google-font.component.css']
})
export class GoogleFontComponent implements OnInit {

  @Input() font: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var link = document.createElement("link");

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://fonts.googleapis.com/css?family=" + this.font);

    document.getElementsByTagName("head").item(0).appendChild(link);

  }

}
