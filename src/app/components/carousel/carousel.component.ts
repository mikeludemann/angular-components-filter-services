import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() viewport: object;
  @Input() images: any;

  @Input() ngStyle: { [key: string]: string; }

  @ViewChild('carousel') el: ElementRef;
  @ViewChild('next') next: ElementRef;
  @ViewChild('prev') prev: ElementRef;

  container = {
    "max- width": "100%",
    "position": "relative",
    "margin": "auto"
  };

  nexts = {
    "cursor": "pointer",
    "position": "absolute",
    "top": "50%",
    "width": "auto",
    "padding": "16px",
    "margin-top": "-22px",
    "color": "#fff",
    "font-weight": "bold",
    "font-size": "12px",
    "transition": "1s ease-in-out",
    "border-radius": "3px 3px 3px 3px",
    "user-select": "none",
    "right": "0"
  };

  prevs = {
    "cursor": "pointer",
    "position": "absolute",
    "top": "50%",
    "width": "auto",
    "padding": "16px",
    "margin-top": "-22px",
    "color": "#fff",
    "font-weight": "bold",
    "font-size": "12px",
    "transition": "1s ease-in-out",
    "border-radius": "0 3px 3px 0",
    "user-select": "none"
  };

  sliderElement = {
    "display": "none",
    "animation": "fade 1s"
  };

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    var style = document.createElement('style');
    style.type = 'text/css';

    let styling =
    `        
    @keyframes fade{
      from {
        opacity: 0.4
      } 
      to {
        opacity: 1
      }
    }
    `

    style.innerHTML = styling;
    document.getElementsByTagName('head')[0].appendChild(style);

    function resizeViewport(){

      this.viewport = {
  
        width: document.documentElement.clientWidth || document.body.clientWidth,
        height: document.documentElement.clientHeight || document.body.clientHeight
  
      }
  
    }

    window.addEventListener('resize', resizeViewport);

    let defaultIndex = 1;
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    slider(defaultIndex);

    prev.addEventListener("click", function(){
      slider(defaultIndex -= 1);
    });

    next.addEventListener("click", function(){
      slider(defaultIndex += 1);
    });

    function slider(n) {

      let i,
      slides = document.getElementsByClassName("slider--element");
      
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

    window.removeEventListener('resize', resizeViewport);

  }

  handleVisibleNext(visible: number) {
    this.next.nativeElement.style.backgroundColor = "rgba(0,0,0," + visible + ")";
  }

  handleVisiblePrev(visible: number) {
    this.prev.nativeElement.style.backgroundColor = "rgba(0,0,0," + visible + ")";
  }

}
