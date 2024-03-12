import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPage } from '../app/components/products/products.component';

describe('ProductsPage', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsPage]
    });
    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
