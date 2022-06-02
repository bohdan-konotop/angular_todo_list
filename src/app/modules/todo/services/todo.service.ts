import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable } from "rxjs";

export interface TodoList {
  text: string,
  active: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList = new BehaviorSubject<TodoList[]>([]);

  private todoList$ = this.todoList.asObservable()

  getTodoList(): Observable<TodoList[]> {
    return this.todoList$;
  }

  addTodo(todo: string) {
    this.todoList.next([
        ...this.todoList.value, {
          text: todo,
          active: false
        }
    ]);
  }

  allCheckbox(allActive: boolean) {
    const source = this.todoList.value
    const activeList = source.map(todo => {
      todo.active = !allActive;
      return todo;
    });
    this.todoList.next(activeList);
  }

  changeCheckbox(i: number) {
    const todoList = this.todoList.value;
    todoList[i].active = !todoList[i].active;
    this.todoList.next(todoList);
  }

  deleteTodo(todoId: number) {
    const todoList = this.todoList.value;
    this.todoList.next(todoList.filter((todo, index) => index !== todoId));
  }

  deleteActiveTodo() {
    const filtered = this.todoList.value.filter(todo => !todo.active);
    this.todoList.next(filtered);
  }
}
