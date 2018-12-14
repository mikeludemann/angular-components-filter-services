import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'details-mode',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() open: boolean;

  constructor() { }

  ngOnInit() {
  }

}
