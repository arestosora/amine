import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCompleted } from '../app/components/payment/completed/completed.component';

describe('PaymentCompleted', () => {
  let component: PaymentCompleted;
  let fixture: ComponentFixture<PaymentCompleted>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentCompleted]
    });
    fixture = TestBed.createComponent(PaymentCompleted);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
