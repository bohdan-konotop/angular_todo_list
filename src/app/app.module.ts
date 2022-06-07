import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../environments/environment";
import { getAuth, provideAuth } from "@angular/fire/auth";

import { AppComponent } from "./app.component";
import { AuthModule } from "./modules/auth/auth.module";
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo("");
const redirectLoggedInToHome = () => redirectLoggedInTo("todo");

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/auth/auth.module").then((m) => m.AuthModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: "todo",
    loadChildren: () =>
      import("./modules/todo/todo.module").then((m) => m.TodoModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
