import {Component, OnInit, ViewChild} from '@angular/core';
import {BoardService} from '../../services/board/board.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  boards: Array<any>;
  displayedColumns: string[] = ['title', 'posts'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getBoards().subscribe(data => {
      this.boards = data;
      this.dataSource = new MatTableDataSource<any>(this.boards);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
