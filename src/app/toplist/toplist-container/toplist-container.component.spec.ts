import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplistContainerComponent } from './toplist-container.component';

describe('ToplistContainerComponent', () => {
  let component: ToplistContainerComponent;
  let fixture: ComponentFixture<ToplistContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplistContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
