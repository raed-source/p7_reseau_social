import { Injectable } from '@angular/core';
import { Post } from '../models/post-model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError, mapTo, of, Subject, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts$ = new Subject<Post[]>();
  constructor(private httpClient: HttpClient,
    private auth: AuthService) {}
  posts: Post[] = [
    {
      id: 1,
      title: 'Archibald',
      content: 'Mon meilleur ami depuis tout petit !',
      imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      liked: 47,
    nbLike:4    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      content: 'Un endroit magnifique pour les randonnées.',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      liked: 6,
      nbLike: 4
    }
  ];

  getAllPosts(): Post[] {
    return this.posts;
  }

  getPostById(postId: number): Post {
    const post = this.posts.find(post => post.id === postId);
    if (!post) {
      throw new Error('le post not found!');
    } else {
      return post;
    }
  }

  postById(postId: number, postType: 'like' | 'dislike'): void {
    const post = this.getPostById(postId);
    postType === 'like' ? post.liked++ : post.liked--;
  }

  like(id: string, like: boolean) {
    return this.httpClient.post<{ message: string }>(
      'http://localhost:3000/api/posts/' + id + '/like',
      { userId: this.auth.getUserId(), like: like ? 1 : 0 }
    ).pipe(
      mapTo(like),
      catchError(error => throwError(error.error.message))
    );
  }
}
