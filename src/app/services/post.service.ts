import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = "https://jsonplaceholder.typicode.com/posts";
 private posts: any[];

  constructor( private http: HttpClient ) { }

  get() {
    return this.http.get(this.url);
  }

  create(post) {
    return this.http.post(this.url, JSON.stringify(post));

  }

  
  update(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify(post));

  }

  delete(post) {
    return this.http.delete(this.url + '/' + post.id);
  }
}
