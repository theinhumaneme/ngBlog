import { Author } from "./author.model";

export class Comment{
    author: Author;
    comments: Comment[];
    title: string;
    body: Text;
    dateCommented: string;
}