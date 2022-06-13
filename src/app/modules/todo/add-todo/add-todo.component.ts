import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TodoService } from "../../../services/todo.service";
import { DatabaseService } from "../../../services/database.service";
import { TodoList } from "../../../interfaces/todo-list.interface";

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
          Validators.maxLength(54),
        ],
      ],
    });
  }

  onSubmit() {
    if (!this.todo.valid) return;
    this.todoService.addTodo(this.todo.value.text);
    this.todo.reset();
    this.scrollToBottom();
  }

  backupSave: TodoList[] = [];
  todoList: TodoList[] = [];

  saveTodo() {
    this.db.getUserTodo().subscribe((todoList) => {
      this.backupSave = todoList.val();
    });
    this.db.saveTodo().catch(console.error);
  }

  undo() {
    this.db.saveTodo(this.backupSave).catch(console.error);
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
