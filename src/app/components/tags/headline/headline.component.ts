import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  @Input() id: string;
  @Input() size: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {

    var element = document.getElementById(this.id);

    if(this.size == "1"){
      element.innerHTML = "<h1>" + this.title + "</h1>";
    } else if(this.size == "2"){
      element.innerHTML = "<h2>" + this.title + "</h2>";
    } else if(this.size == "3"){
      element.innerHTML = "<h3>" + this.title + "</h3>";
    } else if(this.size == "4"){
      element.innerHTML = "<h4>" + this.title + "</h4>";
    } else if(this.size == "5"){
      element.innerHTML = "<h5>" + this.title + "</h5>";
    } else if(this.size == "6"){
      element.innerHTML = "<h6>" + this.title + "</h6>";
    } else {
      element.innerHTML = this.title;
    }

  }

}
