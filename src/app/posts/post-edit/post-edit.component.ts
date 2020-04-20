import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { GiphyService } from '../../services/giphy.service';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post/post.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit, OnDestroy {

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
          this.backClicked();
        }
      });
    }
  });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save(form: NgForm) {
    this.postService.remove(this.post).subscribe(result => {
      this.backClicked();
    }, error => console.error(error));
  }

  edit(){
    console.log(this.post);
    this.postService.update(this.post, this.post.id);
    this.backClicked();
  }

  backClicked() {
    this._location.back();
  }

}
