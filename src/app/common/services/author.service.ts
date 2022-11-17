import { Subject } from "rxjs";
import { Author } from "../models/author.model";

export class authorService{
    authorsChanged = new Subject<Author[]>();
    authors: Author[] = [
        
    ]

}