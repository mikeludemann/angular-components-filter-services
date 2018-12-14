import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dialog-mode',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() compact: boolean;

  constructor() { }

  ngOnInit() {
  }

}
