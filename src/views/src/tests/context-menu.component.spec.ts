import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenu } from '../app/components/basics/context-menu/context-menu.component';

describe('ContextMenuComponent', () => {
  let component: ContextMenu;
  let fixture: ComponentFixture<ContextMenu>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContextMenu]
    });
    fixture = TestBed.createComponent(ContextMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
