import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  public API = 'https://loopy-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.API + 'api/posts/list');
  }

  get(id: number) {
    return this.http.get(this.API + 'api/posts/' + id);
  }

  getBoard(id: number) {
    return this.http.get('https://loopy-api.herokuapp.com/boards/actual/' + id);
  }

  save(post: any, id: number): Observable<any> {
    console.log('SELECTED ID: ' + id);
    post.board = this.getBoard(id);
    console.log('POST BOARD: ' + post.board.title);
    let result: Observable<any>;
    if (post.href) {
      result = this.http.put(post.href, post);
    } else {
      result = this.http.post(this.API + 'api/posts/', post);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
