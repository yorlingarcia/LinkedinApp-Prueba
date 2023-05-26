import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPublicarComponent } from './modal-publicar.component';

describe('ModalPublicarComponent', () => {
  let component: ModalPublicarComponent;
  let fixture: ComponentFixture<ModalPublicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPublicarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPublicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
