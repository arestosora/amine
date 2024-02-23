import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductboxComponent } from './productbox.component';

describe('ProductboxComponent', () => {
  let component: ProductboxComponent;
  let fixture: ComponentFixture<ProductboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductboxComponent]
    });
    fixture = TestBed.createComponent(ProductboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
