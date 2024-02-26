import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRadio } from './radio.component';

describe('RadioComponent', () => {
  let component: InputRadio;
  let fixture: ComponentFixture<InputRadio>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputRadio]
    });
    fixture = TestBed.createComponent(InputRadio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
