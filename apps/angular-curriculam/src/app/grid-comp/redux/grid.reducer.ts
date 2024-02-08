import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Employee } from '../../model';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { getAll, getAllSuccess } from './grid.action';
export const gridFeatureKey = 'grid';

export interface GridState extends EntityState<Employee> {}
export const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();

export const initialGridState: GridState = adapter.getInitialState();
const getGridState = createFeatureSelector<GridState>(gridFeatureKey);
export const gridReducer = createReducer(
  initialGridState,
  on(getAll, (state) => ({ ...state })),
  on(getAllSuccess, (state, { payload }) => adapter.setAll(payload, state))
);

export const gridSelectors = adapter.getSelectors();
export const selectAlldata = createSelector(
  getGridState,
  gridSelectors.selectAll
);
