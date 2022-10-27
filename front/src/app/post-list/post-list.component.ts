import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post-model';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts!:Post[];
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.posts=this.postService.getAllPosts();
  }

}
