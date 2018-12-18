import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'footer-mode',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() class: string;

  constructor() { }

  ngOnInit() {
  }

}
