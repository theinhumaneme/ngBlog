import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../common/models/post.model';
import { dataStorageService } from '../../common/services/data-storage.service';
import { PostService } from '../../common/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() id: number;
  // postSubscription: Subscription;
  posts = [];
  view: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private dataService: dataStorageService
  ) {}

  ngOnInit(): void {}
  onDelete() {
    this.postService.deletePost(this.id);
    this.router.navigate(['/blog'], { relativeTo: this.route });
    this.dataService.storePosts();
  }
}
