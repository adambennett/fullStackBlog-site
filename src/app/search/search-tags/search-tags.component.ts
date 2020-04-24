import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-search-tags',
  templateUrl: './search-tags.component.html',
  styleUrls: ['./search-tags.component.scss']
})
export class SearchTagsComponent implements OnInit {

  myTags = '';
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['header', 'author', 'board.title', 'comments', 'createTimestamp' ];
  posts: Array<any>;
  checked = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private postService: PostService,
    // tslint:disable-next-line:variable-name
    private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

  search(filter: boolean) {
    this.postService.getPostsByTag(this.myTags, String(filter)).subscribe(data => {
      this.posts = data;
      this.dataSource = new MatTableDataSource<any>(this.posts.slice().reverse());
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
