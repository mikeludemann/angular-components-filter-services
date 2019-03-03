import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.css']
})
export class ModalImageComponent implements OnInit {

  @Input() ngStyle: { [key: string]: string; }

  @Input() id: string;
  @Input() url: string;
  @Input() alttext: string;

  @ViewChild('modalimage') el: ElementRef;

  constructor() { }

  ngOnInit() {

    let main = this.el.nativeElement;

    let modal = document.getElementById('modal-image-container');
    let body = document.getElementsByTagName('body')[0];

    let container = document.getElementById(this.id);
    let close = document.getElementById("close");

    container.onclick = function(){

        modal.style.display = "block";
        body.style.overflow = "hidden";
        modal.children[1].setAttribute("src", main.children[0].src);
        modal.children[2].innerHTML = main.children[0].alt;

    }

    close.onclick = function() { 

        modal.style.display = "none";
        body.style.overflow = '';

    }

    let dw = document || window;

    dw.addEventListener("click", function (event) {

        if (event.target == modal) {

            modal.style.display = "none";
            body.style.overflow = '';

        }

    });

  }

}
