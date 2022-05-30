import {Component, EventEmitter, Input, Output} from '@angular/core';
import { TodoList } from "../todo.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', '../styles/base.css']
})
export class MainComponent {
  @Input() todoList: TodoList[] = [];
  @Output() newDeleteTodoEvent = new EventEmitter<TodoList[]>()

  all: boolean = false;

  deleteTodo(todoId: number) {
    this.todoList = this.todoList.filter((todo, index) => index !== todoId);
    this.newDeleteTodoEvent.emit(this.todoList);
  }

  changeCheckbox(i: number) {
    this.todoList[i].active = !this.todoList[i].active;
    this.newDeleteTodoEvent.emit(this.todoList);
    this.all = false;
  }

  allCheckbox() {
    this.todoList.map(todo => {
      return todo.active = !this.all;
    })
    this.all = !this.all;
    this.newDeleteTodoEvent.emit(this.todoList);
  }
}
