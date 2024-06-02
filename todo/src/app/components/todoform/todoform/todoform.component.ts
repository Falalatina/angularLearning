import { Component } from '@angular/core';

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.scss',
})
export class TodoformComponent {
  print() {
    console.log('ua');
  }
}
