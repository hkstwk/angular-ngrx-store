import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {toggleMyTasks} from '../store/actions/filter.actions';
import {selectFilterMyTasks} from '../store/selectors/filter.selectors';
import {AsyncPipe} from '@angular/common';
import {State} from '../store';

@Component({
  selector: 'app-filter-options',
  imports: [
    AsyncPipe
  ],
  templateUrl: './filter-options.component.html',
  styleUrl: './filter-options.component.css'
})
export class FilterOptionsComponent {
  inBehandeling$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.inBehandeling$ = this.store.select(selectFilterMyTasks);
  }

  onToggleMyTasksFilter(event: Event ) {
    const isChecked = (event.target as HTMLInputElement).checked;
    console.log('Checkbox is now:', isChecked);
    this.store.dispatch(toggleMyTasks({ inBehandeling: isChecked }));
  }
}
