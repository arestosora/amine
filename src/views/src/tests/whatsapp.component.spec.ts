import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappComponent } from '../app/components/products/whatsapp/whatsapp.component';

describe('WhatsappComponent', () => {
  let component: WhatsappComponent;
  let fixture: ComponentFixture<WhatsappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappComponent]
    });
    fixture = TestBed.createComponent(WhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
