import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post-model';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  myPosts$!:Observable<Post[]>;
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.myPosts$=this.postService.getAllPosts();
        }

}

