import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormMail } from '../app/components/payment/form/mail/mail.component';

describe('PaymentFormMail', () => {
  let component: PaymentFormMail;
  let fixture: ComponentFixture<PaymentFormMail>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentFormMail]
    });
    fixture = TestBed.createComponent(PaymentFormMail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
