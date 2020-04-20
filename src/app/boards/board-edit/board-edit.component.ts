import { Component, OnInit } from '@angular/core';
import {BoardService} from '../../services/board/board.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.scss']
})
export class BoardEditComponent implements OnInit {

  constructor(
    // tslint:disable-next-line:variable-name
    private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}
