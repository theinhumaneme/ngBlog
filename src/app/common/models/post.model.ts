import { Author } from "./author.model";
import { Comment } from "./comment.model";
import { Tag } from "./tag.model";

export class Post{
    author: Author;
    comments: Comment[];
    title: string;
    body: string;
    datePosted: string;
    tag: Tag[];
}