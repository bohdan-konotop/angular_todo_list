import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TodoList } from "../../../interfaces/todo-list.interface";
import { TodoService } from "../../../services/todo.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  all: boolean = false;

  deleteTodo(todoId: number) {
    this.todoService.deleteTodo(todoId);
  }

  changeCheckbox(i: number) {
    this.todoService.changeCheckbox(i);
    this.all = false;
  }

  allCheckbox() {
    this.todoService.allCheckbox(this.all);
    this.all = !this.all;
  }

  todoList: TodoList[] = [];

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe((todoList) => {
      this.todoList = todoList;
    });
  }

  constructor(private todoService: TodoService) {}
}
