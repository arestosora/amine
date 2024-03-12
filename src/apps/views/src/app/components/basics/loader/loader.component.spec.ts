import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader } from './loader.component';

describe('LoaderComponent', () => {
  let component: Loader;
  let fixture: ComponentFixture<Loader>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Loader]
    });
    fixture = TestBed.createComponent(Loader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
