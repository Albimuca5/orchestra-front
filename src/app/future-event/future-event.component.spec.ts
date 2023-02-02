import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureEventComponent } from './future-event.component';

describe('FutureEventComponent', () => {
  let component: FutureEventComponent;
  let fixture: ComponentFixture<FutureEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
