import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'comments',
    pathMatch: 'full',
  },
  {
    path: 'comments',

    loadComponent: () =>
      import('./components/commentSection/commentSection.component').then(
        (m) => m.commentSection
      ),
  },
];
