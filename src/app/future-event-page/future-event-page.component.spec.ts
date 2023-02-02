import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureEventPageComponent } from './future-event-page.component';

describe('FutureEventPageComponent', () => {
  let component: FutureEventPageComponent;
  let fixture: ComponentFixture<FutureEventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureEventPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
