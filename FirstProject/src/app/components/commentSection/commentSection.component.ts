import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'comment',
  templateUrl: './commentSection.component.html',
})
export class commentSection {
  users = ['user1', 'user2', 'ser3'];
  message = ['hi', 'papa', 'uwu'];
  iteration = 0;
  container: string[] = [];

  showComment() {
    this.iteration++;
    this.container.push('');
    if (this.iteration >= this.users.length) {
      this.iteration = 0;
    }
  }
}
