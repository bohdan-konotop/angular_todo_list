import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TodoList } from "../../interfaces/todo-list.interface";
import { DatabaseService } from "../../services/database.service";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
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

  constructor(private db: DatabaseService, private todoService: TodoService) {}

  ngOnInit() {
    this.db.getUserTodo().subscribe((todoList) => {
      this.todoService.getUserTodo(todoList.val());
    });
  }
}
