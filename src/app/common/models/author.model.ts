import { Comment } from "./comment.model";
import { Post } from "./post.model";

export class Author{
    name: string;
    imageUrl: string;
    username: string;
    dateJoined: string;
    posts: Post[];
    comments: Comment[];

}