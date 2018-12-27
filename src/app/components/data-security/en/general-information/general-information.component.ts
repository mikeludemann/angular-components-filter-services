import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  @Input() firstname: string;
  @Input() lastname: string;
  @Input() street: string;
  @Input() streetnumber: string;
  @Input() postalcode: string;
  @Input() city: string;
  @Input() telephone: string;
  @Input() email: string;

  constructor() { }

  ngOnInit() {
  }

}
