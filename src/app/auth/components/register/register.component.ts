import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import { registerAction } from '../../store/actions/register.action';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: '',
    password: '',
  });
  isSubmitting$?: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onSubmit(): void {
    console.log(this.form.value)
    this.store.dispatch(registerAction(this.form.value));
    this.authService
      .register(this.form.value)
      .subscribe((currentUser: CurrentUserInterface) => {
        console.log(currentUser);
      });
  }
}
