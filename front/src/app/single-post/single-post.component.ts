import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post-model';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  post!:Post;
  buttonText!:string;

  constructor(private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buttonText='Like';
    const postId=+this.route.snapshot.params['id'];
    this.post=this.postService.getPostById(postId);
  }
  like() {
    if (this.buttonText === 'Oh Snap!') {
      this.postService.postById(this.post.id, 'like');
      this.buttonText = 'Like';
    } else {
      this.postService.postById(this.post.id, 'like');
      this.buttonText = 'Oh Snap!';
    }
  }

}
