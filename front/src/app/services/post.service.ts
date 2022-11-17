import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../models/post-model";
import { map, Observable, switchMap } from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class PostService{
  constructor(private http:HttpClient){}
  posts:Post[]=[]
  // ******************************************************************

getAllPosts(): Observable<Post[]> {
  return this.http.get<Post[]>('http://localhost:3000/posts');
}
// ********************************************************************

likedPostById(id: number, likeType:string): Observable<Post> {
//   const post = this.getPostById(id); // à remplacer par un Observable
//  likeType==='Like'?post.like='Ok':post.like='';
  return this.getPostById(id).pipe(
    map(post=>({
      ...post,
      like:likeType==='Like'?'ok':''
    })),
    switchMap(updatePost=>this.http.put<Post>(`http://localhost:3000/posts/${id}`,updatePost))
  )
}
// ********************************************************************

disLikedById(id: number): void {
  const post = this.posts.find(post => post.id === id);
  if (post) {
      post.like='';
  } else {
      throw new Error('Post not found!');
  }
}
// ********************************************************************

getPostById(id: number): Observable<Post> {
  return this.http.get<Post>(`http://localhost:3000/posts/${id}`)
}

addPost(formValue:{ title: string, content: string, imgUrl: string, location?: string }):Observable<Post>{
  return this.getAllPosts().pipe(
    map(posts=>[...posts].sort((a:Post,b:Post)=>a.id-b.id)),
    map(sortedPosts=>sortedPosts[sortedPosts.length-1]),
    map(previousPost=>({
      ...formValue,
      like:'',
      dateCreat:new Date(),
      id:previousPost.id+1
    })),
    switchMap(newPost=>this.http.post<Post>('http://localhost:3000/posts',newPost))
  )
const post:Post={
  ...formValue,
  dateCreate:new Date,
  like:'0',
  dislike:'0',
  id:this.posts[this.posts.length-1].id+1
}
this.posts.push(post);
}
}
