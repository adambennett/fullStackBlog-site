import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { GiphyService } from '../../services/giphy.service';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post/post.service';
import {Location} from '@angular/common';


export class Post {
  id: number;
  board: any;
  comments: Array<any>;
  header: string;
  author: string;
  text: string;
  imageUrl: string;
  createTimestamp: Date;
  updateTimestamp: Date;
}

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit, OnDestroy {

  post: Post;

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostService,
              // tslint:disable-next-line:variable-name
              private _location: Location) { }

  ngOnInit() {this.sub = this.route.params.subscribe(params => {
    const id = params.id;
    if (id) {
      this.postService.get(id).subscribe((post: Post) => {
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

  edit(){
    this.postService.update(this.post, this.post.id);
    this.backClicked();
  }

  backClicked() {
    this._location.back();
  }

}
