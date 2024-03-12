import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingComponent } from '../app/components/products/plans/training/training.component';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let fixture: ComponentFixture<TrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingComponent]
    });
    fixture = TestBed.createComponent(TrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
