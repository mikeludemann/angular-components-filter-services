import { Component, OnInit } from '@angular/core';
import { ModalService } from './../../components/modal/custom-modal/service/modal.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

    constructor(private modalService: ModalService) {
    }

    ngOnInit() {

    }

    openModal(id: string) {
      this.modalService.open(id);
    }

    closeModal(id: string) {
      this.modalService.close(id);
    }

}
