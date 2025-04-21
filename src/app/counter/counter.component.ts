import {Component, HostListener, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from '../store/actions/counter.actions';
import {State} from '../store';
import {CounterState} from './counter.model';

@Component({
  selector: 'app-counter',
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  counterState$: Observable<CounterState>;

  constructor(private store: Store<State>) {
    this.counterState$ = this.store.select(counterState => counterState.count);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.reset();
  }

  // Listen for keydown events on the document
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch(event.key) {
      case '+':
      case '=': // Since + is typically Shift+=
        this.increment();
        break;
      case '-':
        this.decrement();
        break;
      case 'r':
        this.reset();
        break;
    }
  }

  increment() {
    console.log('increment');
    this.store.dispatch(increment())
  }

  decrement() {
    console.log('decrement');
    this.store.dispatch(decrement())
  }

  reset() {
    console.log('reset');
    this.store.dispatch(reset())
  }

}
