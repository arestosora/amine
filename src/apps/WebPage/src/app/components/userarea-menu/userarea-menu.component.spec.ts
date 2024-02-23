import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserareaMenuComponent } from './userarea-menu.component';

describe('UserareaMenuComponent', () => {
  let component: UserareaMenuComponent;
  let fixture: ComponentFixture<UserareaMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserareaMenuComponent]
    });
    fixture = TestBed.createComponent(UserareaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
