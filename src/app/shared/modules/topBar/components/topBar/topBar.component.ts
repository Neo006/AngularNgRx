import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-topBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent {
  // isLoggedIn$: Observable<boolean> = this.store.pipe(
  //   select(isLoggedInSelector)
  // );

  constructor(private store: Store) {}
}
