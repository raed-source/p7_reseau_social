import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../models/post-model';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
@Input() post!:Post;

  buttonText!:string;
  buttonDelete!:string;
  constructor(private postService: PostService,
    private router: Router) {}
  ngOnInit(): void {

    this.buttonText='Like';
    this.buttonDelete='Delete';
  }
  like() {
    if (this.buttonText === 'Liked!') {
      this.post.liked++;
      this.buttonText = 'like';
    } else {
      this.post.liked--;
      this.buttonText = 'Like!'
    }
  }
  onViewPost() {
    this.router.navigateByUrl(`posts/${this.post.id}`);
  }
}
