import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../services/post/post.service';
import {BoardService} from '../../services/board/board.service';

@Component({
  selector: 'app-board-add',
  templateUrl: './board-add.component.html',
  styleUrls: ['./board-add.component.scss']
})
export class BoardAddComponent implements OnInit, OnDestroy {
  formControlObj: FormControl;
  board: any = {};
  boards: Array<any>;
  selectedValue: number;

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostService,
              private boardService: BoardService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.boardService.get(id).subscribe((board: any) => {
          if (board) {
            this.board = board;
            this.board.href = board._links.self.href;
          } else {
            console.log(`Board with id '${id}' not found, returning to list`);
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

  save(form: NgForm) {
    this.boardService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
