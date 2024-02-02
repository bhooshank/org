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
  {
    path: 'general',
    loadComponent: () =>
      import('./general-feature/general-feature.component').then(
        (m) => m.GeneralFeatureComponent
      ),
  },
  {
    path: 'version',
    loadComponent: () =>
      import('./ng-version-feature/ng-version-feature.component').then(
        (m) => m.NgVersionFeatureComponent
      ),
  },
  {
    path: '**',redirectTo:'general'
  },
];
