import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  posts: any[] = [
    {
      username: 'john_doe',
      description: 'Beautiful sunset',
      image: 'https://example.com/sunset.jpg',
      liked: false,
    },
    {
      username: 'jane_smith',
      description: 'Delicious food',
      image: 'https://example.com/food.jpg',
      liked: false,
    },
  ];
  comments: any[] = [];
  newComment: string = '';

  toggleLike(post: any) {
    post.liked = !post.liked;
  }

  addComment() {
    if (this.newComment) {
      this.comments.push({
        username: 'user123',
        text: this.newComment,
      });
      this.newComment = '';
    }
  }
}