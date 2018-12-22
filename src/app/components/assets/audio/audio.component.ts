import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'audio-block',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  @Input() class: string;
  @Input() id: string;
  @Input() autoplay: boolean;
  @Input() controls: boolean;
  @Input() preload: boolean;
  @Input() volume: boolean;
  @Input() muted: boolean;
  @Input() loop: boolean;
  @Input() crossorigin: boolean;
  @Input() notsupportedtext: string;
  @Input() mpeg: string;
  @Input() mp4: string;
  @Input() webm: string;
  @Input() ogg: string;
  @Input() flac: string;
  @Input() title: string;
  @Input() track: boolean;
  @Input() tracksrc: string;
  @Input() trackkind: string;
  @Input() tracksrclang : string;
  @Input() tracklabel: string;

  @ViewChild('audio') el: ElementRef;

  constructor() { }

  ngOnInit() {

    var audio = document.createElement("audio");

    audio.setAttribute("id", this.id);

    if (this.autoplay == true) {

      audio.setAttribute("autoplay", "");

    } else {

      audio.removeAttribute("autoplay");

    }

    if (this.controls == true) {

      audio.setAttribute("controls", "");

    } else {

      audio.removeAttribute("controls");

    }

    if (this.preload == false || this.preload == true) {

      audio.setAttribute("preload", String(this.preload));

    } else {

      audio.removeAttribute("preload");

    }

    if (this.volume == true || this.volume == false) {

      audio.setAttribute("volume", String(this.volume));

    } else {

      audio.removeAttribute("volume");

    }

    if (this.muted == true) {

      audio.setAttribute("muted", "");

    } else {

      audio.removeAttribute("muted");

    }

    if (this.loop == true) {

      audio.setAttribute("loop", "");

    } else {

      audio.removeAttribute("loop");

    }

    if (this.crossorigin == true || this.crossorigin == false) {

      audio.setAttribute("crossOrigin", String(this.crossorigin));

    } else {

      audio.removeAttribute("crossOrigin");

    }

    if (this.notsupportedtext != null || this.notsupportedtext != "") {

      var text = document.createTextNode(this.notsupportedtext); 
      audio.appendChild(text);

    } 
    
    if (this.mpeg != "" || this.mpeg != null) {

      var text = document.createTextNode("<source src=" + this.mpeg + " type='audio/mpeg'>");
      audio.appendChild(text);

    } 

    if (this.mp4 != "" || this.mp4 != null) {

      var text = document.createTextNode("<source src=" + this.mp4 + " type='audio/mp4'>");
      audio.appendChild(text);

    } 

    if (this.webm != "" || this.webm != null) {

      var text = document.createTextNode("<source src=" + this.webm + " type='audio/webm'>");
      audio.appendChild(text);

    } 

    if (this.ogg != "" || this.ogg != null) {

      var text = document.createTextNode("<source src=" + this.ogg + " type='audio/ogg'>");
      audio.appendChild(text);

    } 

    if (this.flac != "" || this.flac != null) {

      var text = document.createTextNode("<source src=" + this.flac + " type='audio/flac'>");
      audio.appendChild(text);

    }

    if (this.title != "" || this.title != null) {

      audio.setAttribute("title", this.title);

    } 

    if (this.track == true) {

      var text = document.createTextNode("<track src=" + this.tracksrc + " kind=" + this.trackkind + " srclang=" + this.tracksrclang + " label=" + this.tracklabel + ">");
      audio.appendChild(text);

    } 

    this.el.nativeElement.appendChild(audio);

  }

}
