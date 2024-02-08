import { createAction, props } from '@ngrx/store';
import { Employee } from '../../model';

export const addOne = createAction('[Grid Component] addOne ');
export const getAll = createAction('[Grid Component] getALL ');
export const getAllSuccess = createAction(
  '[Grid Component] getALL Success',
  props<{ payload: Employee[] }>()
);
export const reset = createAction('[Grid Component] Reset');
