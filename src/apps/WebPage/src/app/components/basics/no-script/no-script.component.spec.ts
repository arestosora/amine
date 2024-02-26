import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoScript } from './no-script.component';

describe('NoscriptComponent', () => {
  let component: NoScript;
  let fixture: ComponentFixture<NoScript>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoScript]
    });
    fixture = TestBed.createComponent(NoScript);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
