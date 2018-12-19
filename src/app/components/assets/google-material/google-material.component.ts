import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'google-material',
  templateUrl: './google-material.component.html',
  styleUrls: ['./google-material.component.css']
})
export class GoogleMaterialComponent implements OnInit {

  @Input() element: string;

  constructor() { }

  ngOnInit() {

    var link = document.createElement("link");

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://fonts.googleapis.com/icon?family=Material+Icons");

    document.getElementsByTagName("head").item(0).appendChild(link);

  }

}
