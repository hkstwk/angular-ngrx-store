import {createAction, props} from '@ngrx/store';
import {TaskFilter} from '../../filter-options/filter.model';

export const toggleMyTasks = createAction(
  '[Filter] Toggle My Tasks',
  props<TaskFilter>()
);
