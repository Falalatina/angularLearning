import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'comment',
  templateUrl: './commentSection.component.html',
  styleUrl: './commentSection.component.scss',
})
export class commentSection {
  users = ['user1', 'user2', 'ser3'];
  message = ['hi', 'papa', 'uwu'];
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
