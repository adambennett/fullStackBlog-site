import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostTitleComponent } from './search-post-title.component';

describe('SearchPostTitleComponent', () => {
  let component: SearchPostTitleComponent;
  let fixture: ComponentFixture<SearchPostTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPostTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
