import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from './books.model';

@Injectable({providedIn: 'root'})
export class GoogleBooksService {
  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=verstappen'
      )
      .pipe(map((books) => books.items || []));
  }
}
