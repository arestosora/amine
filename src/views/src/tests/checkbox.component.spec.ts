import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckbox } from '../app/components/inputs/checkbox/checkbox.component';

describe('CheckboxComponent', () => {
  let component: InputCheckbox;
  let fixture: ComponentFixture<InputCheckbox>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputCheckbox]
    });
    fixture = TestBed.createComponent(InputCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
