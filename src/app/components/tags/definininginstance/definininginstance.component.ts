import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'definininginstance',
  templateUrl: './definininginstance.component.html',
  styleUrls: ['./definininginstance.component.css']
})
export class DefinininginstanceComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
