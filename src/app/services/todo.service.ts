import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TodoList } from "../interfaces/todo-list.interface";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todoList = new BehaviorSubject<TodoList[]>([]);

  private todoList$ = this.todoList.asObservable();

  getTodoListObservable(): Observable<TodoList[]> {
    return this.todoList$;
  }

  getTodoList(): TodoList[] {
    return this.todoList.value;
  }

  getUserTodo(todoList: TodoList[]): void {
    this.todoList.next(todoList);
  }

  addTodo(todo: string): void {
    this.todoList.next([
      ...(this.todoList?.value || []),
      {
        text: todo,
        active: false,
      },
    ]);
  }

  allChecked(checked: boolean): void {
    const source = this.todoList.value;
    const activeList = source.map((todo) => {
      todo.active = checked;
      return todo;
    });
    this.todoList.next(activeList);
  }

  changeCheckbox(i: number): void {
    const todoList = this.todoList.value;
    todoList[i].active = !todoList[i].active;
    this.todoList.next(todoList);
  }

  deleteTodo(todoId: number): void {
    const todoList = this.todoList.value;
    this.todoList.next(todoList.filter((todo, index) => index !== todoId));
  }

  deleteActiveTodo(): void {
    const filtered = this.todoList.value.filter((todo) => !todo.active);
    this.todoList.next(filtered);
  }

  changeTodoText(todoId: number, value: string): void {
    let todoList = this.todoList.value;
    todoList[todoId].text = value;
    this.todoList.next(todoList);
  }
}
