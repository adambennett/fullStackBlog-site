import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostAuthorComponent } from './search-post-author.component';

describe('SearchPostAuthorComponent', () => {
  let component: SearchPostAuthorComponent;
  let fixture: ComponentFixture<SearchPostAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPostAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
