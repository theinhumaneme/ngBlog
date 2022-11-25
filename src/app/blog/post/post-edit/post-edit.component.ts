import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../../../common/models/post.model';
import { dataStorageService } from '../../../common/services/data-storage.service';
import { PostService } from '../../../common/services/post.service';

@Component({
  selector: 'post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  // post: Post;
  id: number;
  editMode: boolean = false;
  postForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private ds: dataStorageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm(): void {
    let postTitle: string = '';
    let postContent: string = '';
    let commentsEnabled: boolean = false;
    if (this.editMode) {
      const post = this.postService.getPost(this.id);
      postTitle = post['title'];
      postContent = post['content'];
      commentsEnabled = post['commentsEnabled'];
    }

    this.postForm = new FormGroup({
      title: new FormControl(postTitle, Validators.required),
      content: new FormControl(postContent, Validators.required),
      commentsEnabled: new FormControl(commentsEnabled),
      // 'tag': new FormControl(tag, Validators.required)
    });
  }
  onSubmit() {
    console.log(this.postForm.value);
    if (this.editMode) {
      var post = this.postService.getPost(this.id);
      post.title = this.postForm.value['title'];
      post.content = this.postForm.value['content'];
      post.commentsEnabled = this.postForm.value['commentsEnabled'];
      this.postService.updatePost(this.id, post);
    } else {
      this.postService.addPost(
        new Post(
          this.postForm.value['title'],
          this.postForm.value['content'],
          this.postForm.value['commentsEnabled']
        )
      );
    }
    this.ds.storePosts();
    this.onCancel();
  }
  onCancel(): void {
    this.router.navigate(['/blog'], { relativeTo: this.route });
  }
}
