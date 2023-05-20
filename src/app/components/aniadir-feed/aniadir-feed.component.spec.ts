import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirFeedComponent } from './aniadir-feed.component';

describe('AniadirFeedComponent', () => {
  let component: AniadirFeedComponent;
  let fixture: ComponentFixture<AniadirFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniadirFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniadirFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
