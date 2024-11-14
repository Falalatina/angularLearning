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
  {
    path: 'logic',

    loadComponent: () =>
      import('./components/python-logic/python-logic.component').then(
        (m) => m.PythonLogicComponent
      ),
  },
];
