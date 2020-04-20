import {Component, OnDestroy, OnInit} from '@angular/core';
import {BoardService} from '../../services/board/board.service';
import {Location} from '@angular/common';
import {PostService} from '../../services/post/post.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit, OnDestroy {

  post: any = {};
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    // tslint:disable-next-line:variable-name
    private _location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    const id = params.id;
    if (id) {
      this.postService.get(id).subscribe((post: any) => {
        if (post) {
          this.post = post;
        } else {
          console.log(`Post with id '${id}' not found, returning to list`);
          this.backClicked();
        }
      });
    }
  });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  backClicked() {
    this._location.back();
  }

}
