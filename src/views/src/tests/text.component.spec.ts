import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormText } from '../app/components/inputs/text/text.component';

describe('FormText', () => {
  let component: FormText;
  let fixture: ComponentFixture<FormText>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormText]
    });
    fixture = TestBed.createComponent(FormText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
