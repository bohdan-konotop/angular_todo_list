import {Component, Output, Input, EventEmitter} from '@angular/core';
import {TodoList} from "../todo.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../styles/base.css']
})
export class HeaderComponent {
  @Input() todoList: TodoList[] = [];
  @Output() newActiveRemovedEvent = new EventEmitter<TodoList[]>();

  activeTodos() {
    return this.todoList.filter(todo => !todo.active);
  }

  removeActive() {
    this.todoList = this.todoList.filter(todo => !todo.active);
    this.newActiveRemovedEvent.emit(this.todoList);
  }
}
