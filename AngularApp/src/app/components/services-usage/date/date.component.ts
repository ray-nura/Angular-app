import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts/posts.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
  todaysDate: Date;
  todos: any;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.todaysDate = this.postsService.showDate();
    this.postsService.getPosts().subscribe((data: []) => {
      // console.log('Data : ', data);
      this.todos = data;
    });
  }
}
