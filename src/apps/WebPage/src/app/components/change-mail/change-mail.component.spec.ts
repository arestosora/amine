import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMailComponent } from './change-mail.component';

describe('ChangeMailComponent', () => {
  let component: ChangeMailComponent;
  let fixture: ComponentFixture<ChangeMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeMailComponent]
    });
    fixture = TestBed.createComponent(ChangeMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
