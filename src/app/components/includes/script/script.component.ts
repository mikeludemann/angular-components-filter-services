import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'script-mode',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.css']
})
export class ScriptComponent implements OnInit {

  @Input() url: string;
  @Input() async: string;
  @Input() defer: string;
  @Input() type: string;
  @Input() charset: string;

  constructor() { }

  ngOnInit() {
  }

}
