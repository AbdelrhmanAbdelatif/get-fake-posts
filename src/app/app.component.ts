import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts: any = [];
  constructor(private postService: PostService) { }

  url: string = "https://jsonplaceholder.typicode.com/posts";



  ngOnInit(): void {
    this.postService.get().subscribe(response => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value, id: '' }
    this.postService.create(post)
      .subscribe(response => {
        this.posts.splice(0, 0, post);  //push(post) add bottom page one  so we used splice to add top page
        // start at 0 then remove 0 then append post
      });

  }


  updatePost(post, inputTitle) {
    let updatePost = { title: inputTitle, id: post.id };
    this.postService.update(updatePost).subscribe(response => {
      // update cureent view 
      let index = this.posts.indexOf(post);
      this.posts[index] = updatePost;
    })

  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.postService.delete(post).subscribe(response => {
      this.posts.splice(index, 1);
    })
  }

}
