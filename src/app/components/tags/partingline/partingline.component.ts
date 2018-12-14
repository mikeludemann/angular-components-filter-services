import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'partingline',
  templateUrl: './partingline.component.html',
  styleUrls: ['./partingline.component.css']
})
export class PartinglineComponent implements OnInit {

  @Input() id: string;
  @Input() class: string;
  @Input() orientation: string;
  @Input() styling: "";

  vertical = {
    'transform': 'rotate(90deg)'
  };

  horizontal = {
    'transform': 'rotate(0deg)'
  };

  constructor() { }

  ngOnInit() {

    var line = document.querySelector("hr");

    if (this.orientation == "vertical") {
      
      line.style.transform = "rotate(90deg)";

    } else if (this.orientation == "horizontal") {
      
      line.style.transform = "rotate(0deg)";

    } else {
      
      line.style.transform = "rotate(0deg)";

    }

  }

}
