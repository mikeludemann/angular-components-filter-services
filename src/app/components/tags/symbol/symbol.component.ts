import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent implements OnInit {

  @Input() id: string;
  @Input() codeformat: string;
  @Input() code: string;

  constructor() { }

  ngOnInit() {

    var element = document.getElementById(this.id);

    if(this.codeformat == "decimal"){
      element.innerHTML = "<span>" + '&#' + this.code + ';' + "</span>";
    } else if(this.codeformat == "hexadecimal"){
      element.innerHTML = "<span>" + '&#x' + this.code + ';' + "</span>";
    } else if(this.codeformat == "entity"){
      element.innerHTML = "<span>" + '&' + this.code + ';' + "</span>";
    } else {
      element.innerHTML = "<span>" + this.code + "</span>";
    }
    
  }

}
