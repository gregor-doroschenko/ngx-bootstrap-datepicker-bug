import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsDatepickerConfig, BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.datePickerConfig = {
      containerClass: 'theme-default',
      showWeekNumbers: false
    };
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
