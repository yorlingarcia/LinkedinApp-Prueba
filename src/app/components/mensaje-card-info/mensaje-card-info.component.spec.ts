import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeCardInfoComponent } from './mensaje-card-info.component';

describe('MensajeCardInfoComponent', () => {
  let component: MensajeCardInfoComponent;
  let fixture: ComponentFixture<MensajeCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeCardInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
