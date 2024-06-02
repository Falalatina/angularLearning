import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.scss',
})
export class TodoformComponent {
  todo: any[] = [{ date: '2024-06-05', todo: 'ss' }];

  fPrint(val: object) {
    val = { ...val, isChecked: false };
    console.log(val);
    this.todo.push(val);
    console.log('a');
  }
}
