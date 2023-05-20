import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilBienvenidaComponent } from './perfil-bienvenida.component';

describe('PerfilBienvenidaComponent', () => {
  let component: PerfilBienvenidaComponent;
  let fixture: ComponentFixture<PerfilBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilBienvenidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
