import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from './components/register/register.component';
import { authReducer } from './store/reducers';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { PersistanceService } from '../shared/services/persistance.service';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
