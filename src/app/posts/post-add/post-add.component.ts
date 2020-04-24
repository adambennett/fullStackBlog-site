import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post/post.service';
import {BoardService} from '../../services/board/board.service';
import { FormControl } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit, OnDestroy {

  formControlObj: FormControl;
  post: any = {};
  boards: Array<any>;
  selectedValue: number;
  myTags = '';

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostService,
              private boardService: BoardService,
              // tslint:disable-next-line:variable-name
              private _location: Location) { }

  ngOnInit() {
    this.boardService.getBoards().subscribe(data => {
      this.boards = data;
      this.formControlObj = new FormControl(this.boards);
    });
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.postService.get(id).subscribe((post: any) => {
          if (post) {
            this.post = post;
            this.post.href = post._links.self.href;
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

  save(form: NgForm, id: number) {
    this.postService.save(form, id, this.myTags).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  backClicked() {
    this._location.back();
  }
}
