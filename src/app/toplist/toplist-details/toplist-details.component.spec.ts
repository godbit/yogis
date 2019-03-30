import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplistDetailsComponent } from './toplist-details.component';

describe('ToplistDetailsComponent', () => {
  let component: ToplistDetailsComponent;
  let fixture: ComponentFixture<ToplistDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplistDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
