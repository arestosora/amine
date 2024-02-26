import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentForm } from './form.component';

describe('PaymentForm', () => {
  let component: PaymentForm;
  let fixture: ComponentFixture<PaymentForm>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentForm]
    });
    fixture = TestBed.createComponent(PaymentForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
