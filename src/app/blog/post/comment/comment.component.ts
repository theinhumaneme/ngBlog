import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../common/models/comment.model';
import { dataStorageService } from '../../../common/services/data-storage.service';
import { PostService } from '../../../common/services/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Input() postId;
  @Input() commentId: number;
  constructor(
    private postService: PostService,
    private dataStorageService: dataStorageService
  ) {}
  ngOnInit(): void {}
  onDelete() {
    this.postService.deleteComment(this.postId, this.commentId);
    this.dataStorageService.storePosts();
  }
}
