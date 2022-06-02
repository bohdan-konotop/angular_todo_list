import {Component, Output, Input, EventEmitter, OnInit} from '@angular/core';
import { TodoService } from "../services/todo.service";
import {TodoList} from "../todo.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todoList: TodoList[] = [];

  activeTodos() {
    return this.todoList.filter(todo => !todo.active);
  }

  removeActive() {
    this.todoService.deleteActiveTodo()

  }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe(todoList => {
      this.todoList = todoList;
    })
  }

  constructor(private todoService: TodoService) {  }
}
