import { Component, inject } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'comment',
  templateUrl: './commentSection.component.html',
  styleUrl: './commentSection.component.scss',
})
export class commentSection {
  commentService = inject(CommentService);
  users = this.commentService.userComments;

  idUser = Math.random();
  userName = '';
  newComment = '';

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
