import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {counterReducers} from './reducers/counter.reducers';
import {booksReducer} from './reducers/books.reducer';
import {Book} from '../book-list/books.model';
import {collectionReducer} from './reducers/collection.reducer';
import {CounterState} from '../counter/counter.model';

export interface State {
  count: CounterState;
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}

export const reducers: ActionReducerMap<State> = {
  count: counterReducers,
  books: booksReducer,
  collection: collectionReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
