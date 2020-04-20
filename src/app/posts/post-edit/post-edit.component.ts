import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { GiphyService } from '../../services/giphy.service';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post/post.service';

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
              private giphyService: GiphyService) { }

  ngOnInit() {this.sub = this.route.params.subscribe(params => {
    const id = params.id;
    if (id) {
      this.postService.get(id).subscribe((post: any) => {
        if (post) {
          this.post = post;
          // this.post.href = post._links.self.href;
          // this.giphyService.get(post.name).subscribe(url => post.giphyUrl = url);
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

  save(form: NgForm) {
    this.postService.remove(this.post).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  edit(){
    console.log(this.post);
    this.postService.update(this.post, this.post.id);
    this.gotoList();
  }

  // remove(href) {
  //   this.postService.remove(href).subscribe(result => {
  //     this.gotoList();
  //   }, error => console.error(error));
  // }

}
