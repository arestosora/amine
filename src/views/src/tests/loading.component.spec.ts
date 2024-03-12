import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLoading } from '../app/components/payment/loading/loading.component';

describe('LoadingComponent', () => {
  let component: PaymentLoading;
  let fixture: ComponentFixture<PaymentLoading>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentLoading]
    });
    fixture = TestBed.createComponent(PaymentLoading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
