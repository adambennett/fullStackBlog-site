import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { GiphyService } from '../../services/giphy.service';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post/post.service';
import {BoardService} from '../../services/board/board.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.scss']
})
export class PostDeleteComponent implements OnDestroy, OnInit {

  post: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostService,
              // tslint:disable-next-line:variable-name
              private _location: Location) { }

  ngOnInit() {this.sub = this.route.params.subscribe(params => {
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
    this.router.navigate(['/post-list']);
  }

  remove() {
    this.postService.remove(this.post);
    this.gotoList();
  }

  backClicked() {
    this._location.back();
  }

}
