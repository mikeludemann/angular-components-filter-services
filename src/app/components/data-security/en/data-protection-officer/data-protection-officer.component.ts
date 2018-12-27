import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-protection-officer',
  templateUrl: './data-protection-officer.component.html',
  styleUrls: ['./data-protection-officer.component.css']
})
export class DataProtectionOfficerComponent implements OnInit {

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
