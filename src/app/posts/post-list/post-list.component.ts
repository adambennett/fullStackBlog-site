import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../../services/post/post.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {BoardService} from '../../services/board/board.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Array<any>;
  displayedColumns: string[] = ['header', 'author', 'board.title', 'comments', 'createTimestamp' ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private postService: PostService,
              // tslint:disable-next-line:variable-name
              private _location: Location) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
      this.dataSource = new MatTableDataSource<any>(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'board.title': return item.board.title;
          default: return item[property];
        }
      };
      this.dataSource.sort = this.sort;
    });
  }

  backClicked() {
    this._location.back();
  }

}
