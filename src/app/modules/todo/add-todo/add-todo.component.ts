import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { TodoService } from "../../../services/todo.service";
import { DatabaseService } from "../../../services/database.service";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"],
})
export class AddTodoComponent {
  todo: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private db: DatabaseService
  ) {
    this.todo = fb.group({
      text: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(65),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.todo.value.text === null) return;
    this.todoService.addTodo(this.todo.value.text);
    this.todo.reset();
  }

  saveTodo() {
    this.db.saveTodo(this.todoService.getTodoList());
  }
}
