import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaDivisoraComponent } from './linea-divisora.component';

describe('LineaDivisoraComponent', () => {
  let component: LineaDivisoraComponent;
  let fixture: ComponentFixture<LineaDivisoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaDivisoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineaDivisoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
