import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';
import { LoggingService } from './logging.service';
@Injectable()
export class PostService {
  postsChanged = new Subject<Post[]>();
  private posts: Post[] = [];
  constructor(private ls: LoggingService) {}

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChanged.next(this.posts.slice());
  }

  getPosts() {
    return this.posts.slice();
  }

  // return this.posts.slice();

  getPost(index: number) {
    return this.posts.at(index);
  }
  addPost(post: Post) {
    this.posts.push(post);
    this.ls.addLog('add', 'post');
    this.postsChanged.next(this.posts.slice());
  }
  updatePost(index: number, post: Post) {
    this.posts[index] = post;
    this.ls.addLog('update', 'post');
    this.postsChanged.next(this.posts.slice());
  }
  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.ls.addLog('delete', 'post');
    this.postsChanged.next(this.posts.slice());
  }

  // MANIPULATE COMMENTS
  getComment(postId: number, commentId: number) {
    var post = this.posts.at(postId);
    var comment = post.comments[commentId];
    console.log(comment);
    return comment;
  }
  addComment(postId: number, comment: Comment) {
    var post = this.posts.at(postId);
    if (post.hasOwnProperty('comments')) {
      post.comments.push(comment);
    } else {
      post.comments = [];
      post.comments.push(comment);
    }
    this.ls.addLog('add', 'comment');
    this.updatePost(postId, post);
  }
  updateComment(postId: number, commentId: number, comment: Comment) {
    this.posts.at(postId).comments[commentId] = comment;
    console.log(this.posts.at(postId));
    this.ls.addLog('update', 'comment');
    this.updatePost(postId, this.posts[postId]);
    this.postsChanged.next(this.posts.slice());
  }
  deleteComment(postId: number, commentId: number) {
    this.posts[postId].comments.splice(commentId, 1);
    this.ls.addLog('delete', 'comment');
    this.updatePost(postId, this.posts[postId]);
    this.postsChanged.next(this.posts.slice());
  }
}
