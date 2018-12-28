import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() street: string;
  @Input() streetNumber: string;
  @Input() postalcode: string;
  @Input() place: string;
  @Input() salutation: string;
  @Input() title?: string;
  @Input() secondName?: string;
  @Input() country?: string;
  @Input() telephone?: string;
  @Input() telefax?: string;
  @Input() email?: string;
  @Input() homepage?: string;
  @Input() homepageText?: string;

  @ViewChild('salutation') st: ElementRef;
  @ViewChild('title') tl: ElementRef;
  @ViewChild('secondname') sname: ElementRef;
  @ViewChild('country') ct: ElementRef;
  @ViewChild('telephone') tel: ElementRef;
  @ViewChild('telefax') fax: ElementRef;
  @ViewChild('email') mail: ElementRef;
  @ViewChild('homepage') hp: ElementRef;

  constructor() { }

  ngOnInit() {
    if (this.salutation == "" || this.salutation == null) {
      this.st.nativeElement.style.display = "none";
    }
    if (this.secondName == "" || this.secondName == null) {
      this.sname.nativeElement.style.display = "none";
    }
    if (this.title == "" || this.title == null) {
      this.tl.nativeElement.style.display = "none";
    }
    if (this.country == "" || this.country == null) {
      this.ct.nativeElement.style.display = "none";
    }
    if (this.telephone == "" || this.telephone == null) {
      this.tel.nativeElement.style.display = "none";
    }
    if (this.telefax == "" || this.telefax == null) {
      this.fax.nativeElement.style.display = "none";
    }
    if (this.email == "" || this.email == null) {
      this.mail.nativeElement.style.display = "none";
    }
    if ((this.homepage == "" || this.homepage == null) && (this.homepageText == "" || this.homepageText == null)) {
      this.hp.nativeElement.style.display = "none";
    }
  }

  handleSalutation() {
    if (this.salutation != "" || this.salutation != null) {
      this.st.nativeElement.innerHTML = '<span class="salutation">' + this.salutation + '</span>';
    }
  }

  handleTitle() {
    if (this.title != "" || this.title != null) {
      this.tl.nativeElement.innerHTML = '<span class="title">' + this.title + '</span>';
    }
  }

  handleSecondName() {
    if (this.secondName != "" || this.secondName != null) {
      this.sname.nativeElement.innerHTML = '<span class="secondName">' + this.secondName + '</span>';
    }
  }

  handleCountry() {
    if (this.country != "" || this.country != null) {
      this.ct.nativeElement.innerHTML = '<span class="country">' + this.country + '</span>';
    }
  }

  handleTelephone() {
    if (this.telephone != "" || this.telephone != null) {
      this.tel.nativeElement.innerHTML = '<div class="telephone">' + this.telephone + '</div>';
    }
  }

  handleTelefax() {
    if (this.telefax != "" || this.telefax != null) {
      this.fax.nativeElement.innerHTML = '<div class="telefax">' + this.telefax + '</div>';
    }
  }

  handleEmail() {
    if (this.email != "" || this.email != null) {
      this.mail.nativeElement.innerHTML = '<div class="email"><a href=' + "mailto:" + this.email + '>' + this.email + '</a></div>';
    }
  }

  handleHomepage() {
    if ((this.homepage != "" || this.homepage != null) && (this.homepageText != "" || this.homepageText != null)) {
      this.hp.nativeElement.innerHTML = '<div class="homepage"><a href=' + "http://" + this.homepage + '>' + this.homepageText + '</a></div>';
    }
  }

}
