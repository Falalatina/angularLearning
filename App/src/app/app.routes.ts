import { Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      {
        path: 'welcome',
        loadComponent: () =>
          import('./modules/welcome/welcome.component').then(
            (c) => c.WelcomeComponent
          ),
      },
    ],
  },
];
