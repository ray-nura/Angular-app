import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  showDate() {
    let todayDate = new Date();
    return todayDate;
  }

  getPosts(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/');
  }
}
