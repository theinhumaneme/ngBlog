import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from '../models/log.model';
import { Post } from '../models/post.model';
import { LoggingService } from './logging.service';
import { PostService } from './post.service';

@Injectable({ providedIn: 'root' })
export class dataStorageService {
  constructor(
    private http: HttpClient,
    private postService: PostService,
    private loggingService: LoggingService
  ) {}

  storePosts() {
    const recipes = this.postService.getPosts();
    const logs = this.loggingService.getLogs();
    this.http
      .put(
        'https://angular-http-demo-udemy-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
    this.http
      .put(
        'https://angular-http-demo-udemy-default-rtdb.asia-southeast1.firebasedatabase.app/logs.json',
        logs
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchPosts() {
    this.http
      .get<Post[]>(
        'https://angular-http-demo-udemy-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
      )
      .subscribe((posts) => {
        if (posts != null) {
          this.postService.setPosts(posts);
        }
      });
    this.http
      .get<Log[]>(
        'https://angular-http-demo-udemy-default-rtdb.asia-southeast1.firebasedatabase.app/logs.json'
      )
      .subscribe((logs) => {
        if (logs != null) {
          this.loggingService.setLogs(logs);
        }
      });
  }
  // storeLogs() {
  //   const recipes = this.loggingService.getLogs();
  //   this.http
  //     .put(
  //       'https://angular-http-demo-udemy-default-rtdb.asia-southeast1.firebasedatabase.app/logs.json',
  //       recipes
  //     )
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }
  // fetchLogs() {
  //   this.http
  //     .get<Post[]>(
  //       'https://angular-http-demo-udemy-default-rtdb.asia-southeast1.firebasedatabase.app/logs.json'
  //     )
  //     .subscribe((posts) => {
  //       if(posts!=null){
  //         this.postService.setPosts(posts);
  //       }

  //     });
  // }
}
