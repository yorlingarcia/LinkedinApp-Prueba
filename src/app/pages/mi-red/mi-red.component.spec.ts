import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiRedComponent } from './mi-red.component';

describe('MiRedComponent', () => {
  let component: MiRedComponent;
  let fixture: ComponentFixture<MiRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiRedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
