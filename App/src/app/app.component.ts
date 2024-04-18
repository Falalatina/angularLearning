import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', //nazwa
  standalone: true, //zawsze ma byc tru
  imports: [RouterOutlet], // providery
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Mopsik';
}
