import { Injectable } from "@angular/core";
import {
  child,
  get,
  getDatabase,
  ref,
  remove,
  set,
  update,
} from "@angular/fire/database";
import { getAuth } from "@angular/fire/auth";
import { from, map, Observable } from "rxjs";
import { TodoService } from "./todo.service";
import { TodoList } from "../interfaces/todo-list.interface";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private todoService: TodoService) {}

  addUser(userId: string, username: string): void {
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

  saveTodo(todoList: TodoList[] | null = null): void {
    const db = getDatabase();
    update(ref(db, `users/${this.getUserId()}`), {
      todoList: todoList ? todoList : this.todoService.getTodoList(),
    })
      .then(() => {
        alert("Success");
      })
      .catch((e) => {
        console.error(e);
        alert("Something goes wrong. Try again");
      });
  }

  getUserTodo(): Observable<any> {
    const dbRef = ref(getDatabase());
    const getTodoListPath = child(dbRef, `users/${this.getUserId()}/todoList`);
    const getTodoList = get(getTodoListPath);

    return from(getTodoList);
  }

  deleteUserData(): Promise<void> {
    const db = getDatabase();
    const getUserPath = ref(db, `users/${this.getUserId()}`);

    return remove(getUserPath).catch(console.error);
  }
}
