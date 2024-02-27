import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentPage {
  loader:boolean = false;
  failed:boolean = false;
  complete:boolean = false;
  formMail:boolean = false;
  formPersonal:boolean = false;
  formPlan:boolean = false;

  constructor() {}

  ngOnInit() {
    this.loader = true;
    this.failed = false;
    this.complete = false;
    this.formMail = false;
    this.formPersonal = false;
    this.formPlan = false;
  }

  loadFailed() {
    this.loader = false;
    this.failed = true;
    this.complete = false;
    this.formMail = false;
    this.formPersonal = false;
    this.formPlan = false;
  }

  loadCompleted() {
    this.loader = false;
    this.failed = false;
    this.complete = true;
    this.formMail = false;
    this.formPersonal = false;
    this.formPlan = false;
    this.loadFormMail()
  }

  loadFormMail() {
    this.loader = false;
    this.failed = false;
    this.complete = false;
    this.formMail = true;
    this.formPersonal = false;
    this.formPlan = false;
  }

  loadFormPersonal() {
    this.loader = false;
    this.failed = false;
    this.complete = false;
    this.formMail = false;
    this.formPersonal = true;
    this.formPlan = false;
  }

  loadFormPlan() {
    this.loader = false;
    this.failed = false;
    this.complete = false;
    this.formMail = false;
    this.formPersonal = false;
    this.formPlan = true;
  }
}
