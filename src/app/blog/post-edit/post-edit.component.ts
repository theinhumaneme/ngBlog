import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Post } from "src/app/common/models/post.model";


@Component({
    selector: 'post-edit',
    templateUrl: "./post-edit.component.html",
    styleUrls:["./post-edit.component.css"]
})

export class PostEditComponent implements OnInit{
    post: Post;

    constructor( private route: ActivatedRoute, private router: Router){
        
    }
    ngOnInit(): void {
        
    }
}