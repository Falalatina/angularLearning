import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'comment',
  templateUrl: './commentSection.component.html',
  styleUrl: './commentSection.component.scss',
})
export class commentSection {
  data = require('./data.js');
  users = this.data.users;
  message = this.data.message;
  iteration = 0;
  container: string[] = [];
  empty = ['Sorry there is no more comments :<'];
  showComment() {
    this.iteration++;
    if (this.iteration <= this.users.length) {
      this.container.push('');
    }
  }
}
