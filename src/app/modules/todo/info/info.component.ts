import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../../services/todo.service";
import { TodoList } from "../../../interfaces/todo-list.interface";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"],
})
export class InfoComponent implements OnInit {
  todoList: TodoList[] = [];

  activeTodos() {
    if (this.todoList) return this.todoList.filter((todo) => !todo.active);
    return;
  }

  removeActive() {
    this.todoService.deleteActiveTodo();
  }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe((todoList) => {
      this.todoList = todoList;
    });
  }

  constructor(private todoService: TodoService) {}
}
