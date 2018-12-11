import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() id: string;
  @Input() class: string;
  @Input() source: string;
  @Input() alttext: string;
  @Input() width: string;
  @Input() height: string;

  constructor() { }

  ngOnInit() {
  }

}
