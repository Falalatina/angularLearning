import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.scss',
})
export class TodoformComponent {
  todo: any[] = [{ date: '2024-06-05', todo: 'ss' }];

  fPrint(val: object) {
    val = { ...val, isChecked: false };
    console.log(val);
    this.todo.push(val);
    console.log(this.todo[0]);
  }

  fDelete(index: any) {
    this.todo = this.todo.filter((i) => i != this.todo[index]);
  }
}
