import { Routes } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";


const appRoutes: Routes = [
{
    path: '',
    pathMatch: 'full',
    redirectTo: 'blog'
},
{
    path: 'blog',
    component: BlogComponent,
}
];