import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFailed } from '../app/components/payment/failed/failed.component';

describe('PaymentFailed', () => {
  let component: PaymentFailed;
  let fixture: ComponentFixture<PaymentFailed>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentFailed]
    });
    fixture = TestBed.createComponent(PaymentFailed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
