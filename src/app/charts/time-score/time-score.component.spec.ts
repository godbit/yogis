import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeScoreComponent } from './time-score.component';

describe('TimeScoreComponent', () => {
  let component: TimeScoreComponent;
  let fixture: ComponentFixture<TimeScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
