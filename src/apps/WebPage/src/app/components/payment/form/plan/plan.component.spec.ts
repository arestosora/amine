import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormPlan } from './plan.component';

describe('PaymentFormPlan', () => {
  let component: PaymentFormPlan;
  let fixture: ComponentFixture<PaymentFormPlan>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentFormPlan]
    });
    fixture = TestBed.createComponent(PaymentFormPlan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
