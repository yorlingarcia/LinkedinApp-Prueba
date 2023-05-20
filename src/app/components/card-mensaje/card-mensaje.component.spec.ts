import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMensajeComponent } from './card-mensaje.component';

describe('CardMensajeComponent', () => {
  let component: CardMensajeComponent;
  let fixture: ComponentFixture<CardMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMensajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
