import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BoardService} from '../../services/board/board.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {CommentService} from '../../services/comment/comment.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['header', 'author', 'comments', 'createTimestamp' ];
  board: any = {};
  posts: Array<any>;
  sub: Subscription;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private boardService: BoardService,
              // tslint:disable-next-line:variable-name
              private _location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.boardService.get(id).subscribe((board: any) => {
          if (board) {
            this.posts = board.posts;
            this.dataSource = new MatTableDataSource<any>(this.posts.slice().reverse());
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          } else {
            console.log(`Board with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  backClicked() {
    this._location.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.backClicked();
  }

}
