import {createReducer, on} from '@ngrx/store';
import {increment, decrement, reset} from '../actions/counter.actions';
import {CounterState} from '../../counter/counter.model';

export const initialState: CounterState = {count: 0};

export const counterReducers = createReducer(
  initialState,
  on(increment, state => ({...state, count: state.count + 1})),
  on(decrement, state => ({...state, count: state.count - 1})),
  on(reset, (state) => ({...state, count: 250}))
)

