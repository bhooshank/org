import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataAPIService } from '../../data-api.service';
import { getAll, getAllSuccess } from './grid.action';
import { map, switchMap } from 'rxjs';
import { Employee } from '../../model';
import { Injectable } from '@angular/core';
@Injectable()
export class GridEffects {
  getAll$ = createEffect(() =>
    this.action$.pipe(
      ofType(getAll),
      switchMap(() =>
        this.dataAPIService
          .getEmployeesAllData()
          .pipe(
            map((employee: Employee[]) => 
              getAllSuccess({ payload: employee }),
            )
          )
      )
    )
  );

  constructor(
    private action$: Actions,
    private dataAPIService: DataAPIService
  ) {}
}
