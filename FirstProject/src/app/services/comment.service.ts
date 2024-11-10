import { Injectable } from '@angular/core';

type comment = {
  userId: number;
  username: string;
  message: string;
};

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  userComments: comment[] = [
    {
      userId: 0,
      username: 'user1',
      message: ' uwu',
    },
    {
      userId: 1,
      username: 'user2',
      message: 'papa',
    },
    {
      userId: 3,
      username: 'ser3',
      message: 'hi',
    },
  ];
}
