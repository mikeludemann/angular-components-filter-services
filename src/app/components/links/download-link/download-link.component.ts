import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'download-link',
  templateUrl: './download-link.component.html',
  styleUrls: ['./download-link.component.css']
})
export class DownloadLinkComponent implements OnInit {
  
  @Input() url: string;
  @Input() name: string;
  @Input() target: string;
  @Input() download: string;

  constructor() { }

  ngOnInit() {
  }

}
