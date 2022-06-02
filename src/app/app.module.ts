import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TodoModule} from "./modules/todo/todo.module";
import { AuthModule } from "./modules/auth/auth.module";
import {RouterModule} from "@angular/router";
import {TodoComponent} from "./modules/todo/todo.component";
import { LogInComponent } from "./modules/auth/log-in/log-in.component";
import {RegisterComponent} from "./modules/auth/register/register.component";
import {AuthComponent} from "./modules/auth/auth.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodoModule,
    AuthModule,
    RouterModule.forRoot([
      {path: "**", component: TodoComponent},
      {
        path: '',
        component: AuthComponent,
        children: [
          {path: 'log-in', component: LogInComponent},
          {path: 'register', component: RegisterComponent},
        ]
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
