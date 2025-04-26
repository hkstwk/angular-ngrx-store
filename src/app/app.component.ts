import {Component, OnInit} from '@angular/core';
import {CounterComponent} from './counter/counter.component';
import {Store} from '@ngrx/store';
import {selectBookCollection, selectBooks} from './store/selectors/books.selectors';
import {BooksActions, BooksApiAction} from './store/actions/books.actions';
import {GoogleBooksService} from './book-list/books.service';
import {Observable} from 'rxjs';
import {Book} from './book-list/books.model';
import {BookListComponent} from './book-list/book-list.component';
import {BookCollectionComponent} from './book-collection/book-collection.component';
import {AsyncPipe} from '@angular/common';
import {FilterOptionsComponent} from './filter-options/filter-options.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, BookListComponent, BookCollectionComponent, AsyncPipe, FilterOptionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  books$: Observable<ReadonlyArray<Book>>;
  bookCollection$: Observable<Book[]>;

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {
    this.books$ = this.store.select(selectBooks);
    this.bookCollection$ = this.store.select(selectBookCollection);
  }

  ngOnInit() {

    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiAction.retrievedBookList({ books }))
      );
  }
}
