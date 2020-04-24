import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

export class Post {
  id: number;
  board: any;
  comments: Array<any>;
  header: string;
  author: string;
  text: string;
  imageUrl: string;
  createTimestamp: Date;
  updateTimestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

 //  public API = 'https://loopy-api.herokuapp.com/api/';
  public API = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.API + 'posts/list');
  }

  getPostsByTag(tags: string, filter: string): Observable<any> {
    return this.http.get(this.API + 'posts/tag', { params: {search: tags, all: filter } });
  }

  get(id: number) {
    return this.http.get(this.API + 'posts/' + id);
  }

  save(post: any, id: number, tags: string): Observable<any> {
    let result: Observable<any>;
    if (post.href) {
      result = this.http.put(post.href, post);
    } else {
      result = this.http.post(this.API + 'posts/' + id, post, { params: {tag: tags} });
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

  update(post: Post, id: number){
    console.log('Post ID: ' + id);
    console.log('Post being updated: ' + post);
    this.http.put(this.API + 'posts/' + id, post);
  }
}
