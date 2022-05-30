import { Component, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css', '../styles/base.css']
})
export class AddTodoComponent {
  todo: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.todo = formBuilder.group({
      "text": [null, [Validators.required, Validators.minLength(1), Validators.maxLength(65)]]
    })
  }

  @Output() newTodoEvent = new EventEmitter<string>();

  onSubmit() {
    if(this.todo.value.text === null) return;
    this.newTodoEvent.emit(this.todo.value.text);
    this.todo.reset();
  }

}

