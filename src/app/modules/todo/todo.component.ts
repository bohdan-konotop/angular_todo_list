import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TodoList } from "../../interfaces/todo-list.interface";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent {
  @Input() todo = "";
  @Output() newListEvent = new EventEmitter<TodoList[]>();

  todoList: TodoList[] = [];

  addTodo(event: string) {
    this.todoList.push({
      text: event,
      active: false,
    });
    this.newListEvent.emit(this.todoList);
  }

  deleteTodo(event: TodoList[]) {
    this.todoList = event;
  }

  deleteActive(event: TodoList[]) {
    this.todoList = event;
  }
}
