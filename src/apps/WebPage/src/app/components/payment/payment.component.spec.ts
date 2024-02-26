import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPage } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentPage;
  let fixture: ComponentFixture<PaymentPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentPage]
    });
    fixture = TestBed.createComponent(PaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
