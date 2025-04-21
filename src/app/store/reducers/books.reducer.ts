import { createReducer, on } from '@ngrx/store';

import { BooksApiAction } from '../actions/books.actions';
import { Book } from '../../book-list/books.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiAction.retrievedBookList, (_state, { books }) => books));
