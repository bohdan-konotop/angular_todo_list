import { Component, OnInit } from "@angular/core";

import { TodoList } from "../../../interfaces/todo-list.interface";
import { TodoService } from "../../../services/todo.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  deleteTodo(todoId: number) {
    this.todoService.deleteTodo(todoId);
  }

  changeCheckbox(i: number) {
    this.todoService.changeCheckbox(i);
    this.updateAllComplete();
  }

  allCheckbox(checked: boolean) {
    this.todoService.allCheckbox(checked);
  }

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.todoList.every((item) => item.active);
  }

  someComplete() {
    const todoFiltered = this.todoList?.filter((todo) => todo.active) || false;
    return !(
      this.todoList &&
      (todoFiltered.length === this.todoList.length ||
        todoFiltered.length === 0)
    );
  }

  todoList: TodoList[] = [];

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe((todoList) => {
      this.todoList = todoList;
    });
  }

  constructor(private todoService: TodoService) {}
}
