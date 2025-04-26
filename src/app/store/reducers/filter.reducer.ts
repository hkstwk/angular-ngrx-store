import {createReducer, on} from '@ngrx/store';
import {toggleMyTasks} from '../actions/filter.actions';
import {TaskFilter} from '../../filter-options/filter.model';

export const initialState: TaskFilter = {
  inBehandeling: false
} ;

export const filterReducers = createReducer(
  initialState,
  on(toggleMyTasks, (state, { inBehandeling }) => ({
    ...state,
    inBehandeling: inBehandeling
  }))
);

