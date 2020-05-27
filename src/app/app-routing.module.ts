import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePostsComponent } from './update-posts/update-posts.component';



const routes: Routes = [
  {
    path: 'posts/:post.id', component: UpdatePostsComponent
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
