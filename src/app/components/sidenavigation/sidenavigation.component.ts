import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit {

  @Input() ngStyle: { [key: string]: string; }

  @Input() id: string;

  @ViewChild('sidenav') el: ElementRef;

  constructor() { }

  ngOnInit() {

    //let main = this.el.nativeElement;

  }

}
