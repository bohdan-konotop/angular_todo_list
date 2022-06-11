import { Component, OnInit } from "@angular/core";
import { TodoList } from "../../interfaces/todo-list.interface";
import { DatabaseService } from "../../services/database.service";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  todoList: TodoList[] = [];

  constructor(private db: DatabaseService, private todoService: TodoService) {}

  ngOnInit() {
    this.db.getUserTodo().subscribe((todoList) => {
      this.todoService.getUserTodo(todoList.val());
    });
  }
}
