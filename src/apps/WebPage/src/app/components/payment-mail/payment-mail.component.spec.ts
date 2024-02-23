import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMailComponent } from './payment-mail.component';

describe('PaymentMailComponent', () => {
  let component: PaymentMailComponent;
  let fixture: ComponentFixture<PaymentMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentMailComponent]
    });
    fixture = TestBed.createComponent(PaymentMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
