import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  // public API = 'https://loopy-api.herokuapp.com/api/';
  public API = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(this.API + 'comments/' + id);
  }

  save(comment: any, id: number): Observable<any> {
    let result: Observable<any>;
    if (comment.href) {
      result = this.http.put(comment.href, comment);
    } else {
      result = this.http.post(this.API + 'comments/' + id, comment);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
