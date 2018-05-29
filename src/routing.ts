import { Routes } from "@angular/router";
import { LandingComponent } from "./app/landing/landing.component";
import { AuthorsComponent } from "./app/authors/authors.component";
import { TagsComponent } from "./app/tags/tags.component";

export const appRoutes:Routes=[
    {
        path:"",
        component:LandingComponent
    },
    {
        path:"authors",
        component:AuthorsComponent
    },
    {
        path:"tags",
        component:TagsComponent
    }
]