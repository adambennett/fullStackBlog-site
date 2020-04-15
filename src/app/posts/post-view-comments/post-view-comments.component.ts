import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../../services/comment/comment.service';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-post-view-comments',
  templateUrl: './post-view-comments.component.html',
  styleUrls: ['./post-view-comments.component.scss']
})
export class PostViewCommentsComponent implements OnInit, OnDestroy {

  post: any = {};
  comments: Array<any>;
  board: any;
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.postService.get(id).subscribe((post: any) => {
          if (post) {
            this.board = post.board;
            this.comments = post.comments;
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
    this.router.navigate(['/board-list']);
  }

}
