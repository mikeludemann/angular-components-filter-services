import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() name: string;
  @Input() form: string;
  @Input() coordination: string;
  @Input() urlmap: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
