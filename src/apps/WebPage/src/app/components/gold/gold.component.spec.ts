import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldPage } from './gold.component';

describe('GoldPage', () => {
  let component: GoldPage;
  let fixture: ComponentFixture<GoldPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoldPage]
    });
    fixture = TestBed.createComponent(GoldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
