import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperPage } from './copper.component';

describe('CopperPage', () => {
  let component: CopperPage;
  let fixture: ComponentFixture<CopperPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopperPage]
    });
    fixture = TestBed.createComponent(CopperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
