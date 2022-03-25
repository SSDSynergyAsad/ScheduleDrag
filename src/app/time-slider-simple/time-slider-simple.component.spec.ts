import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSliderSimpleComponent } from './time-slider-simple.component';

describe('TimeSliderSimpleComponent', () => {
  let component: TimeSliderSimpleComponent;
  let fixture: ComponentFixture<TimeSliderSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSliderSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSliderSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
