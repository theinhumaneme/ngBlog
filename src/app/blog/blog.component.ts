import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../common/models/post.model';
import { PostService } from '../common/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  postSubscription: Subscription;
  posts: Post[] = [];
  postId: number;
  view: boolean;
  singlePost: Post;
  comments: Comment[];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      this.view = params['id'] != null;
    });
    if (this.view) {
      // this.posts = this.postService.getPosts()
      this.singlePost = this.postService.getPost(this.postId);
      if (this.singlePost.hasOwnProperty('comments')) {
      }
    } else {
      this.posts = this.postService.getPosts();
      this.postSubscription = this.postService.postsChanged.subscribe(
        (posts) => {
          this.posts = posts;
        }
      );
    }
  }
  ngOnDestroy() {
    if (!this.view) {
      this.postSubscription.unsubscribe();
    }
  }
}
