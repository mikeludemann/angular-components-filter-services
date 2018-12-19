import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-font',
  templateUrl: './basefont.component.html',
  styleUrls: ['./basefont.component.css']
})
export class BasefontComponent implements OnInit {

  @Input() color: string;
  @Input() fontfamily: string;
  @Input() size: string;

  constructor() { }

  ngOnInit() {
  }

}
