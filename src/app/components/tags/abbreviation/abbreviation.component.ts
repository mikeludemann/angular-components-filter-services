import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abbreviation',
  templateUrl: './abbreviation.component.html',
  styleUrls: ['./abbreviation.component.css']
})
export class AbbreviationComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
