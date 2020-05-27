import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';



@Component({
  selector: 'app-update-posts',
  templateUrl: './update-posts.component.html',
  styleUrls: ['./update-posts.component.scss']
})
export class UpdatePostsComponent implements OnInit {


  posts: any = [];
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
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
