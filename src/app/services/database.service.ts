import { Injectable } from "@angular/core";
import {
  child,
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
} from "@angular/fire/database";
import { getAuth } from "@angular/fire/auth";
import { from, map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  addUser(userId: string, username: string) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      username: username,
    }).catch((e) => console.error(e));
  }

  getUserId(): string | null {
    const auth = getAuth();
    return auth.currentUser?.uid || null;
  }

  getUserName(): Observable<string> {
    const dbRef = ref(getDatabase());
    return from(get(child(dbRef, `users/${this.getUserId()}`))).pipe(
      map((res) => res.val().username)
    );
  }

  saveTodo(todoList: any) {
    const db = getDatabase();
    return update(ref(db, `users/${this.getUserId()}`), {
      todoList: todoList?.source?.value || todoList,
    })
      .then(() => {
        alert("Success");
      })
      .catch((e) => {
        console.error(e);
        alert("Something goes wrong. Try again");
      });
  }

  getUserTodo() {
    const dbRef = ref(getDatabase());
    return from(get(child(dbRef, `users/${this.getUserId()}/todoList`)));
  }

  deleteUserData() {
    const db = getDatabase();
    return remove(ref(db, `users/${this.getUserId()}`)).catch(console.error);
  }
  constructor() {}
}
