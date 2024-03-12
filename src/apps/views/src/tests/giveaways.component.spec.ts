import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawaysComponent } from '../app/components/products/giveaways/giveaways.component';

describe('GiveawaysComponent', () => {
  let component: GiveawaysComponent;
  let fixture: ComponentFixture<GiveawaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiveawaysComponent]
    });
    fixture = TestBed.createComponent(GiveawaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
