import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverPage } from '../app/components/silver/silver.component';

describe('SilverPage', () => {
  let component: SilverPage;
  let fixture: ComponentFixture<SilverPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SilverPage]
    });
    fixture = TestBed.createComponent(SilverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
