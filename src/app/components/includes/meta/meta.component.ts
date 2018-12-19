import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'meta-mode',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.css']
})
export class MetaComponent implements OnInit {

  @Input() name: string;
  @Input() content: string;
  @Input() charset: string;
  @Input() itemprop: string;
  @Input() httpsequiv: string;
  @Input() property: string;

  constructor() { }

  ngOnInit() {
  }

}
