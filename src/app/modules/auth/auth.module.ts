import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AuthComponent } from "./auth.component";
import { LogInComponent } from "./log-in/log-in.component";
import { RegisterComponent } from "./register/register.component";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../../../environments/environment";
import { getAuth, provideAuth } from "@angular/fire/auth";

const routes: Routes = [
  {
    path: "",
    component: LogInComponent,
  },
];

@NgModule({
  declarations: [AuthComponent, LogInComponent, RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule, AuthComponent],
})
export class AuthModule {}
