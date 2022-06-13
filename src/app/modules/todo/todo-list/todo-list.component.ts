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

  allChecked(checked: boolean) {
    this.todoService.allChecked(checked);
  }

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.todoList.every((item) => item.active);
  }

  someComplete() {
    const todoFiltered = this.todoList?.filter((todo) => todo.active) || false;
    console.log(todoFiltered);

    return !(
      this.todoList &&
      (todoFiltered.length === this.todoList.length ||
        todoFiltered.length === 0)
    );
  }

  todoList: TodoList[] = [];

  ngOnInit(): void {
    this.todoService.getTodoListObservable().subscribe((todoList) => {
      this.todoList = todoList;
    });
  }

  trackByFn(index: number) {
    return index;
  }

  constructor(private todoService: TodoService) {}
}
