import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewCommentsComponent } from './post-view-comments.component';

describe('PostViewCommentsComponent', () => {
  let component: PostViewCommentsComponent;
  let fixture: ComponentFixture<PostViewCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostViewCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostViewCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
