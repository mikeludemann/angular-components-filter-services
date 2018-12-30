import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() ngStyle: { [key: string]: string; }

  @Input() class: string;
  @Input() firstname: string;
  @Input() secondname: string;
  @Input() lastname: string;
  @Input() email: string;
  @Input() size: string;
  @Input() textsize: string;
  @Input() color: string;
  @Input() bgcolor: string;
  @Input() borderradius: string;
  @Input() overcolor: string;

  @ViewChild('avatar') el: ElementRef;

  container = {
    'position': 'relative'
  };

  main = {
    'position': 'absolute',
    'height': 'auto',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
    'text-align': 'center'
  };

  overlay = {
    'position': 'absolute',
    'top': '0%',
    'bottom': '0%',
    'left': '0%',
    'right': '0%',
    'transition': 'all 0.3s ease'
  };

  icon = {
    'color': 'white',
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
    'text-align': 'center'
  };

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.style.width = this.size + 'px';
    this.el.nativeElement.style.height = this.size + 'px';
    this.el.nativeElement.style.fontSize = this.textsize + 'px';
    this.el.nativeElement.style.color = this.color;
    this.el.nativeElement.style.backgroundColor = this.bgcolor;
    this.el.nativeElement.style.borderRadius = this.borderradius + '%';

    this.el.nativeElement.children[0].style.width = this.size + 'px';

    this.el.nativeElement.children[1].style.width = this.size + 'px';
    this.el.nativeElement.children[1].style.height = this.size + 'px';
    this.el.nativeElement.children[1].style.backgroundColor = this.overcolor;
    this.el.nativeElement.children[1].style.borderRadius = this.borderradius + '%';
    this.el.nativeElement.children[1].style.opacity = 0;

    let x = Number(this.size);
    this.el.nativeElement.children[1].children[0].style.fontSize = (x / 4) + 'px';

  }

  ngAfterViewInit() {

    var link = document.createElement("link");

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://use.fontawesome.com/releases/v5.2.0/css/all.css");
    link.setAttribute("crossorigin", "anonymous");
    link.setAttribute("integrity", "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ");
    document.getElementsByTagName("head").item(0).appendChild(link);

    var style = document.createElement("style");
    style.type = "text/css";

    let styling =
      `        
      .fa-user:hover {
        color: #eee;
      }
      `

    style.innerHTML = styling;
    document.getElementsByTagName("head")[0].appendChild(style);

  }

  avatarShow(visible: number) {
    this.el.nativeElement.children[1].style.opacity = visible;
  }

  initialName(firstname: string, lastname: string) {
    return firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase();
  }

}
