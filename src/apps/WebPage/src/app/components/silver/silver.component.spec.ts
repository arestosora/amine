import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverComponent } from './silver.component';

describe('SilverComponent', () => {
  let component: SilverComponent;
  let fixture: ComponentFixture<SilverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SilverComponent]
    });
    fixture = TestBed.createComponent(SilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
