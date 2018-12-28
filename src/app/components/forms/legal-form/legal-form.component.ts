import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'legal-form',
  templateUrl: './legal-form.component.html',
  styleUrls: ['./legal-form.component.css']
})
export class LegalFormComponent implements OnInit {

  @Input() headline: string;
  @Input() registerTitle: string;
  @Input() registerForm: string;
  @Input() vatTitle: string;
  @Input() vatForm: string;
  @Input() taxTitle: string;
  @Input() tax: string;
  @Input() lawTitle: string;
  @Input() lawName: string;

  constructor() { }

  ngOnInit() {
  }

}
