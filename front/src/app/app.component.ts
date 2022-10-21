import { Component, OnInit,Input } from '@angular/core';
import { Post } from './models/post-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
myPost!:Post;


ngOnInit(){
  this.myPost={
  title:'cocou',
  content: 'string',
  imgUrl:'string',
  createdDate: new Date,
  nbLike: 5,
  liked: 5
  };

}
}
