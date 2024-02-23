import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserareaSecurityComponent } from './userarea-security.component';

describe('UserareaSecurityComponent', () => {
  let component: UserareaSecurityComponent;
  let fixture: ComponentFixture<UserareaSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserareaSecurityComponent]
    });
    fixture = TestBed.createComponent(UserareaSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
