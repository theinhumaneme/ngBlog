import { Comment } from "./comment.model";
import { Post } from "./post.model";

export class Author{
    id?:string;
    name: string;
    imageUrl: string;
    username: string;
    dateJoined: Date;
    posts: Post[];
    comments: Comment[];

    constructor(){
    }

}