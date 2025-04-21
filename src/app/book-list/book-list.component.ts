import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './books.model';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
  imports: [
    NgForOf
  ],
  providers: [HttpClient]
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
