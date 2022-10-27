import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'posts',component:PostListComponent
  },
  {
    path:'posts/:id', component:SinglePostComponent
  },
  {
    path:'signup',component:SignUpComponent
  },
{
  path:'login' ,component:LogInComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
