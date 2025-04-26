import {createSelector} from '@ngrx/store';
import {State} from '../index'; // path to where you define State

// Step 1: select the 'filters' slice
export const selectFilters = (state: State) => state.filters;

// Step 2: select the specific value
export const selectFilterMyTasks = createSelector(
  selectFilters,
  (filters) => filters.inBehandeling
);
