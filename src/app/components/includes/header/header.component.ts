import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header-mode',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() class: string;

  constructor() { }

  ngOnInit() {
  }

}
