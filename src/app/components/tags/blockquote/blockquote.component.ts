import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'block-quote',
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.css']
})
export class BlockquoteComponent implements OnInit {

  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
