import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoardsComponent } from './search-boards.component';

describe('SearchBoardsComponent', () => {
  let component: SearchBoardsComponent;
  let fixture: ComponentFixture<SearchBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
