import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplistItemComponent } from './toplist-item.component';

describe('ToplistItemComponent', () => {
  let component: ToplistItemComponent;
  let fixture: ComponentFixture<ToplistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
