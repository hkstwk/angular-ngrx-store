import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {counterReducers} from './reducers/counter.reducers';
import {booksReducer} from './reducers/books.reducer';
import {Book} from '../book-list/books.model';
import {collectionReducer} from './reducers/collection.reducer';
import {CounterState} from '../counter/counter.model';
import {filterReducers} from './reducers/filter.reducer';
import {TaskFilter} from '../filter-options/filter.model';

export interface State {
  count: CounterState;
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
  filters: TaskFilter;
}

export const reducers: ActionReducerMap<State> = {
  count: counterReducers,
  books: booksReducer,
  collection: collectionReducer,
  filters: filterReducers
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
