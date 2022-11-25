import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { LoggingComponent } from './blog/logging/logging.component';
import { CommentEditComponent } from './blog/post/comment-edit/comment-edit.component';
import { PostEditComponent } from './blog/post/post-edit/post-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'blog',
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'new',
    component: PostEditComponent,
  },
  {
    path: 'edit/:id/post',
    component: PostEditComponent,
  },
  {
    path: 'view/:id/post',
    component: BlogComponent,
  },
  {
    path: 'edit/:postId/:commentId',
    component: CommentEditComponent,
  },
  {
    path: 'logs',
    component: LoggingComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
