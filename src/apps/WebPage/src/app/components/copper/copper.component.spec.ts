import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperComponent } from './copper.component';

describe('CopperComponent', () => {
  let component: CopperComponent;
  let fixture: ComponentFixture<CopperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopperComponent]
    });
    fixture = TestBed.createComponent(CopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
