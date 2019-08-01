import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  @Input() images: any;

  @Input() ngStyle: { [key: string]: string; }

  @ViewChild('lightbox') el: ElementRef;
  @ViewChild('column') col: ElementRef;
  @ViewChild('next') next: ElementRef;
  @ViewChild('prev') prev: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    var body = document.getElementsByTagName("body")[0];

		var defaultIndex = 1;

		function showSlides(n) {

			var i;
			var slides = document.getElementsByClassName("mySlides");

			if (n > slides.length) {

				defaultIndex = 1;

			}

			if (n < 1) {

				defaultIndex = slides.length;

			}

			for (i = 0; i < slides.length; i++) {

				slides[i].setAttribute("style","display: none");

			}

			slides[defaultIndex-1].setAttribute("style","display: block");

		}

		showSlides(defaultIndex);

		function openModal(n) {

			document.getElementById("lightbox").style.display = "block";
			body.style.position = "fixed";

			showSlides(defaultIndex = n);

		}

		//var col = document.getElementsByClassName("column");
		var i = 0;

		for(i; i < this.col.nativeElement.length; i++){

			this.col[i].nativeElement.children[0].addEventListener("click", function(i){

				return function(){

					openModal(i+1);

				}

			})(i);

		}

		var prev = document.getElementsByClassName("prev")[0];
		var next = document.getElementsByClassName("next")[0];
		var close = document.getElementsByClassName("close")[0];

		prev.addEventListener("click", function(){

			showSlides(defaultIndex -= 1);

		});

		next.addEventListener("click", function(){

			showSlides(defaultIndex += 1);

		});

		close.addEventListener("click", function(){

			document.getElementById("lightbox").style.display = "none";
			body.style.position = "";

		});

		var dw = document || window;

		dw.onclick = function (event) {

			var modal = document.getElementById("lightbox");

			if (event.target == modal) {

				modal.style.display = "none";
				body.style.position = "";

			}

		}

  }

  handleVisibleNext(visible: number) {
    this.next.nativeElement.style.backgroundColor = "rgba(0,0,0," + visible + ")";
  }

  handleVisiblePrev(visible: number) {
    this.prev.nativeElement.style.backgroundColor = "rgba(0,0,0," + visible + ")";
  }

}
