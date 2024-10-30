import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { commentSection } from './components/commentSection/commentSection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, commentSection],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FirstProject';
}
