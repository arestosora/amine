import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPage } from '../app/components/privacy/privacy.component';

describe('PrivacyPage', () => {
  let component: PrivacyPage;
  let fixture: ComponentFixture<PrivacyPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyPage]
    });
    fixture = TestBed.createComponent(PrivacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
