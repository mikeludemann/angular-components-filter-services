import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'applet-mode',
  templateUrl: './applet.component.html',
  styleUrls: ['./applet.component.css']
})
export class AppletComponent implements OnInit {

  @Input() url: string;
  @Input() objectname: string;
  @Input() position: string;
  @Input() alttext: string;
  @Input() archiveurl: string;
  @Input() codebaseurl: string;
  @Input() spacehorizontal: string;
  @Input() spacevertical: string;
  @Input() height: string;
  @Input() width: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
