import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-icon',
  templateUrl: './fontawesome.component.html',
  styleUrls: ['./fontawesome.component.css']
})
export class FontawesomeComponent implements OnInit {

  @Input() class: string;

  constructor() { }

  ngOnInit() {

    var link = document.createElement("link");

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://use.fontawesome.com/releases/v5.6.1/css/all.css");
    link.setAttribute("crossorigin", "anonymous");
    link.setAttribute("integrity", "sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP");

    document.getElementsByTagName("head").item(0).appendChild(link);

  }

}
