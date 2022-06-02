import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { AuthComponent } from './auth.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AuthComponent,
    LogInComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: 'log-in', component: LogInComponent },
        { path: 'register', component: RegisterComponent },
    ])
  ],
  exports: [
      AuthComponent,
  ]
})
export class AuthModule { }
