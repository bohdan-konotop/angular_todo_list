import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { TodoService } from "../../../services/todo.service";
import { DatabaseService } from "../../../services/database.service";
import { TodoList } from "../../../interfaces/todo-list.interface";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.css"],
})
export class AddTodoComponent {
  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private db: DatabaseService
  ) {}

  form = this.fb.group({
    text: [
      "",
      [Validators.required, Validators.minLength(2), Validators.maxLength(54)],
    ],
  });

  onSubmit() {
    if (!this.form.valid) return;
    this.todoService.addTodo(this.form.value.text);
    this.form.reset();
    this.scrollToBottom();
  }

  backupSave: TodoList[] = [];

  saveTodo() {
    this.db.getUserTodo().subscribe((todoList) => {
      this.backupSave = todoList.val();
    });
    this.db.saveTodo();
  }

  undo() {
    this.db.saveTodo(this.backupSave);
    this.backupSave = [];
  }

  scrollToBottom() {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }
}
