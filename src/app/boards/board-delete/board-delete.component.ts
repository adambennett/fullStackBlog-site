import { Component, OnInit } from '@angular/core';
import {BoardService} from '../../services/board/board.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-board-delete',
  templateUrl: './board-delete.component.html',
  styleUrls: ['./board-delete.component.scss']
})
export class BoardDeleteComponent implements OnInit {

  constructor(
    // tslint:disable-next-line:variable-name
    private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}
