import { Component } from '@angular/core';
import { CommentService } from '../../services/comment.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'comment',
  templateUrl: './commentSection.component.html',
  styleUrl: './commentSection.component.scss',
})
export class commentSection {
  constructor(private commentService: CommentService) {
    this.users = this.commentService.userComments;
  }
  users;

  iteration = 0;
  container: string[] = [];
  empty = ['Sorry there is no more comments :<'];
  showComment() {
    console.log(this.users);
    this.iteration++;
    if (this.iteration <= this.users.length + 1) {
      this.container.push('');
    }
  }
}
