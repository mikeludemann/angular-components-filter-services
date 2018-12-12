import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() id: string;
  @Input() class: string;
  @Input() source: string;
  @Input() alttext: string;
  @Input() width: string;
  @Input() height: string;
  @Input() usemap: string;
  @Input() filter: string;
  @Input() filterDimension: string;

  constructor() { }

  ngOnInit() {

    var image = document.querySelector("img");

    if (this.filter == "blur") {
      image.style.filter = "blur(" + this.filterDimension + ")";
    }
    else if (this.filter == "brightness") {
      image.style.filter = "brightness(" + this.filterDimension + ")";
    }
    else if (this.filter == "contrast") {
      image.style.filter = "contrast(" + this.filterDimension + ")";
    }
    else if (this.filter == "drop-shadow") {
      image.style.filter = "drop-shadow(" + this.filterDimension + ")";
    }
    else if (this.filter == "grayscale") {
      image.style.filter = "grayscale(" + this.filterDimension + ")";
    }
    else if (this.filter == "hue-rotate") {
      image.style.filter = "hue-rotate(" + this.filterDimension + ")";
    }
    else if (this.filter == "invert") {
      image.style.filter = "invert(" + this.filterDimension + ")";
    }
    else if (this.filter == "opacity") {
      image.style.filter = "opacity(" + this.filterDimension + ")";
    }
    else if (this.filter == "saturate") {
      image.style.filter = "saturate(" + this.filterDimension + ")";
    }
    else if (this.filter == "sepia") {
      image.style.filter = "sepia(" + this.filterDimension + ")";
    }
    else {
      image.style.filter = "none";
    }

  }

}
