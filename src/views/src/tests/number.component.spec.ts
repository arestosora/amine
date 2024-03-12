import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNumber } from '../app/components/inputs/number/number.component';

describe('FormNumber', () => {
  let component: FormNumber;
  let fixture: ComponentFixture<FormNumber>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNumber]
    });
    fixture = TestBed.createComponent(FormNumber);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
