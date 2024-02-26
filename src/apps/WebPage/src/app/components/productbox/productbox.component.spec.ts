import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsContainer } from './productbox.component';

describe('ProductsContainer', () => {
  let component: ProductsContainer;
  let fixture: ComponentFixture<ProductsContainer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsContainer]
    });
    fixture = TestBed.createComponent(ProductsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
