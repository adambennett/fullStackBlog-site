import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../services/post/post.service';
import {BoardService} from '../../services/board/board.service';
import {CommentService} from '../../services/comment/comment.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit, OnDestroy {

  formControlObj: FormControl;
  post: any = {};
  sub: Subscription;
  commentAuth: any;
  commentTxt: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostService,
              private commentService: CommentService,
              // tslint:disable-next-line:variable-name
              private _location: Location) { }

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.postService.get(id).subscribe((post: any) => {
          if (post) {
            this.post = post;
          } else {
            console.log(`Post with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this._location.back();
  }

  save(form: NgForm) {
    this.commentService.save(form, this.post.id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
