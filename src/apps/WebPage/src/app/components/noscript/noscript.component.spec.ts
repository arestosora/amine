import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoscriptComponent } from './noscript.component';

describe('NoscriptComponent', () => {
  let component: NoscriptComponent;
  let fixture: ComponentFixture<NoscriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoscriptComponent]
    });
    fixture = TestBed.createComponent(NoscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
