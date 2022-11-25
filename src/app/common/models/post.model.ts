import { Comment } from "./comment.model";

export class Post{
    id: string;
    authorId: string;
    comments?: Comment[];
    title: string;
    content: string;
    datePosted: Date;
    commentsEnabled: boolean;

    constructor( title, content, enableComments){
        this.authorId = "13456789",
        this.title = title,
        this.content = content,
        this.comments = [],
        this.datePosted = new Date(),
        this.commentsEnabled = enableComments
    }
}