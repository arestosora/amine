import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserareaAccountComponent } from './userarea-account.component';

describe('UserareaAccountComponent', () => {
  let component: UserareaAccountComponent;
  let fixture: ComponentFixture<UserareaAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserareaAccountComponent]
    });
    fixture = TestBed.createComponent(UserareaAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
