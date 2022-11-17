import { Subject } from "rxjs";
import { Post } from "../models/post.model";

export class PostService{
    postsChanged = new Subject<Post[]>();
    private posts: Post[] = [
        new Post(
            
        )
    ]


    setPosts(posts: Post[]){
        this.posts = posts;
        this.postsChanged.next(this.posts.slice());
    }

    getPosts(){
        return this.posts.slice();
    }

    getPost(index: number){
        return this.posts[index];
    }
    addPost(post: Post){
        this.posts.push(post);
    }
    updatePost(index: number, post: Post){
        this.posts[index] = post;
        this.postsChanged.next(this.posts.slice());
    }
    deletePost(index:number){
        this.posts.splice(index,1);
        this.postsChanged.next(this.posts.slice());
    }
}