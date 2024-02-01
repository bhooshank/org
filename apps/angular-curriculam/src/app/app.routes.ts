import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'grid', pathMatch: 'full' },
  {
    path: 'grid',
    loadComponent: () =>
      import('./grid-comp/grid-comp.component').then(
        (m) => m.GridCompComponent
      ),
  },
];
