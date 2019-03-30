import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeDistributionComponent } from './grade-distribution.component';

describe('GradeDistributionComponent', () => {
  let component: GradeDistributionComponent;
  let fixture: ComponentFixture<GradeDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
