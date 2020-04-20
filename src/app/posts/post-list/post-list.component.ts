import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../../services/post/post.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Array<any>;
  displayedColumns: string[] = ['header', 'author', 'createTimestamp', 'board.title'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private postService: PostService) { }

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

}
