import { Component } from '@angular/core';
import { users, message } from './data';

@Component({
  standalone: true,
  imports: [],
  selector: 'comment',
  templateUrl: './commentSection.component.html',
  styleUrl: './commentSection.component.scss',
})
export class commentSection {
  users = users;
  message = message;
  iteration = 0;
  container: string[] = [];
  empty = ['Sorry there is no more comments :<'];
  showComment() {
    this.iteration++;
    if (this.iteration <= this.users.length + 1) {
      this.container.push('');
    }
  }
}
