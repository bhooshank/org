import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
import { gridFeatureKey, gridReducer } from './grid-comp/redux/grid.reducer';
import { provideEffects } from '@ngrx/effects';
import { GridEffects } from './grid-comp/redux/grid.effects';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'grid', pathMatch: 'full' },
  {
    path: 'grid',
    loadComponent: () =>
      import('./grid-comp/grid-comp.component').then(
        (m) => m.GridCompComponent
      ),
    providers: [
      provideState({ name: gridFeatureKey, reducer: gridReducer }),
      provideEffects(GridEffects),
    ],
  },
  {
    path: 'general',
    loadComponent: () =>
      import('./general-feature/general-feature.component').then(
        (m) => m.GeneralFeatureComponent
      ),
  },
  {
    path: 'version/:id',
    pathMatch: 'full',
    loadComponent: () =>
      import('./ng-version-feature/ng-version-feature.component').then(
        (m) => m.NgVersionFeatureComponent
      ),
  } /* ,
  {
    path: '**',redirectTo:'general'
  }, */,
];
