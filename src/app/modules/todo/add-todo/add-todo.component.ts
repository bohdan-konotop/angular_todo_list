import { Component, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { TodoService } from "../services/todo.service";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  todo: FormGroup;

  constructor(private formBuilder: FormBuilder, private todoService: TodoService) {
    this.todo = formBuilder.group({
      "text": [null, [Validators.required, Validators.minLength(1), Validators.maxLength(65)]]
    })
  }

  @Output() newTodoEvent = new EventEmitter<string>();

  onSubmit() {
    if(this.todo.value.text === null) return;
    this.todoService.addTodo(this.todo.value.text);
    this.todo.reset();
  }

}

