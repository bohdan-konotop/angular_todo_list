import { Injectable } from "@angular/core";
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "@angular/fire/auth";
import { LoginData } from "../interfaces/login-data.interface";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isUserExist: boolean = true;
  isEmailInUse: boolean = false;

  login({ email, password }: LoginData) {
    this.isUserExist = true;
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => this.router.navigate(["todo"]))
      .catch((e) => {
        console.error(e);
        this.isUserExist = false;
      });
  }

  getUserExistance() {
    return this.isUserExist;
  }

  register({ email, password }: LoginData) {
    this.isEmailInUse = false;
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => this.router.navigate([""]))
      .catch((e) => {
        this.isEmailInUse = true;
        console.error(e);
      });
  }

  getIsEmailInUse() {
    return this.isEmailInUse;
  }

  logout() {
    return signOut(this.auth)
      .then(() => this.router.navigate([""]))
      .catch((e) => {
        console.error(e);
      });
  }
  constructor(private auth: Auth, private router: Router) {}
}
