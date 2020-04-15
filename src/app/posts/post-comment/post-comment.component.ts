import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../services/post/post.service';
import {BoardService} from '../../services/board/board.service';
import {CommentService} from '../../services/comment/comment.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
