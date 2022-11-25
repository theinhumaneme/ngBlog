import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/common/models/comment.model';
import { dataStorageService } from 'src/app/common/services/data-storage.service';
import { PostService } from 'src/app/common/services/post.service';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {

  commentForm: FormGroup
  @Input() postId:number
  commentId:number
  editMode: boolean = false;
  
  constructor(private route: ActivatedRoute, private router:Router, private postService: PostService, private dataService: dataStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) =>{
        this.commentId = +params['commentId']
        this.editMode = params['commentId'] != null;
      }
    )
    this.initForm()
  }
  onSubmit(){
    if(this.editMode){
      this.postService.updateComment(this.postId,this.commentId, this.commentForm.value)
    }
    else{
      this.postService.addComment(this.postId, new Comment(this.commentForm.value['content']))
    }
    this.dataService.storePosts()
    this.onCancel()

  }
  onCancel(){
    if(this.editMode){
      this.router.navigate(['/blog'], { relativeTo: this.route })
    }
    this.commentForm.reset()
  }
  private initForm(){
    var commentContent = ""
    if(this.editMode){
      var comment = this.postService.getComment(this.postId,this.commentId) // get comment data
      console.log(comment)
      var commentContent = comment['content']
    }
    this.commentForm = new FormGroup({
      'content': new FormControl(commentContent, Validators.required)
    });

  }

}
