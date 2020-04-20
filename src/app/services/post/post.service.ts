import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  // public API = 'https://loopy-api.herokuapp.com/api/';
  public API = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.API + 'posts/list');
  }

  get(id: number) {
    return this.http.get(this.API + 'posts/' + id);
  }

  save(post: any, id: number): Observable<any> {
    let result: Observable<any>;
    if (post.href) {
      result = this.http.put(post.href, post);
    } else {
      result = this.http.post(this.API + 'posts/' + id, post);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

  update(post: any, id: number){
    this.http.put(this.API + 'posts/' + id, post);
  }
}
