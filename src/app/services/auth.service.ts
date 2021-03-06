import { Injectable } from "@angular/core";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@angular/fire/auth";
import { LoginData } from "../interfaces/login-data.interface";
import { Router } from "@angular/router";
import { DatabaseService } from "./database.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isUserExist: boolean = true;
  isEmailInUse: boolean = false;

  login({ email, password }: LoginData): Promise<any> {
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

  register({ username, email, password }: LoginData): Promise<boolean | void> {
    this.isEmailInUse = false;
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((callback) => {
        this.db.addUser(callback.user.uid, username);
      })
      .then(() => this.router.navigate([""]))
      .catch((e) => {
        this.isEmailInUse = true;
        console.error(e);
      });
  }

  getIsEmailInUse() {
    return this.isEmailInUse;
  }

  deletteUser() {
    this.auth.currentUser?.delete();
  }

  logout() {
    return signOut(this.auth)
      .then(() => this.router.navigate([""]))
      .catch((e) => {
        console.error(e);
      });
  }

  constructor(
    private auth: Auth,
    private router: Router,
    private db: DatabaseService
  ) {}
}
