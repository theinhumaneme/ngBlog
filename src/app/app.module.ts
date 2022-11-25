import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatToolbarModule,
} from '@angular/material';
import { MatTableModule } from '@angular/material/table'; // <-
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { CommentEditComponent } from './blog/post/comment-edit/comment-edit.component';
import { CommentComponent } from './blog/post/comment/comment.component';
import { PostEditComponent } from './blog/post/post-edit/post-edit.component';
import { PostComponent } from './blog/post/post.component';
import { LoggingService } from './common/services/logging.service';
import { PostService } from './common/services/post.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoggingComponent } from './blog/logging/logging.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    CommentComponent,
    BlogComponent,
    PostEditComponent,
    CommentEditComponent,
    LoggingComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [PostService, LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
