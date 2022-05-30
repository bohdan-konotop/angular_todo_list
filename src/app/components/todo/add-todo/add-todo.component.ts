import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css', '../styles/base.css']
})
export class AddTodoComponent {
  todo = new FormControl('');

  @Output() newTodoEvent = new EventEmitter<string>();

  onSubmit() {
    if(this.todo.value.length > 0) this.newTodoEvent.emit(this.todo.value);
    this.todo.reset();
  }
}

