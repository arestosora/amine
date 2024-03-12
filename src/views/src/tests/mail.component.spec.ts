import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMail } from '../app/components/inputs/mail/mail.component';

describe('FormMail', () => {
  let component: FormMail;
  let fixture: ComponentFixture<FormMail>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMail]
    });
    fixture = TestBed.createComponent(FormMail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
