import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostTextComponent } from './search-post-text.component';

describe('SearchPostTextComponent', () => {
  let component: SearchPostTextComponent;
  let fixture: ComponentFixture<SearchPostTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPostTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
