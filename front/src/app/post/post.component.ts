import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../models/post-model';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
@Input() post!:Post;

  buttonLike!:string;
  buttonDelete!:string;
  constructor() { }

  ngOnInit(): void {
    this.buttonLike='Like';
    this.buttonDelete='Delete';
  }
onPost(){

}
}
