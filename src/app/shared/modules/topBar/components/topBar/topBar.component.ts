import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from '../../../../../auth/store/selectors';

@Component({
  selector: 'mc-topBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean | null> = this.store.pipe(
    select(isLoggedInSelector)
  );
  isAnonymous$: Observable<boolean> = this.store.pipe(
    select(isAnonymousSelector)
  );
  currentUser$: Observable<CurrentUserInterface | null> = this.store.pipe(
    select(currentUserSelector)
  );

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {}
}
