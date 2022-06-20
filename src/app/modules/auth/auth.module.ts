import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AuthComponent } from "./auth.component";
import { LogInComponent } from "./log-in/log-in.component";
import { RegisterComponent } from "./register/register.component";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { AuthValidatorComponent } from './auth-validator/auth-validator.component';

const routes: Routes = [
  {
    path: "",
    component: LogInComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [AuthComponent, LogInComponent, RegisterComponent, AuthValidatorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [RouterModule, AuthComponent],
})
export class AuthModule {}
