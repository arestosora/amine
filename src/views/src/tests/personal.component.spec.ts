import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormPersonal } from '../app/components/payment/form/personal/personal.component';

describe('PaymentFormPersonal', () => {
  let component: PaymentFormPersonal;
  let fixture: ComponentFixture<PaymentFormPersonal>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentFormPersonal]
    });
    fixture = TestBed.createComponent(PaymentFormPersonal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
