import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostTimeComponent } from './search-post-time.component';

describe('SearchPostTimeComponent', () => {
  let component: SearchPostTimeComponent;
  let fixture: ComponentFixture<SearchPostTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPostTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
