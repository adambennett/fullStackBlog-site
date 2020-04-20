import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTagsComponent } from './search-tags.component';

describe('SearchTagsComponent', () => {
  let component: SearchTagsComponent;
  let fixture: ComponentFixture<SearchTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
