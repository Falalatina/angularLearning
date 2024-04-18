import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', //nazwa
  standalone: true, //zawsze ma byc tru
  imports: [RouterOutlet], // providery
  template: `<router-outlet></router-outlet> `,
})
export class AppComponent {
  title = 'Mopsik';
}
