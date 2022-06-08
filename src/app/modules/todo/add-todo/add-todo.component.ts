import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
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

  backupSave: TodoList[] = [];

  saveTodo() {
    this.db.getUserTodo().subscribe((todoList) => {
      this.backupSave = todoList.val();
    });
    this.db.saveTodo(this.todoService.getTodoList()).catch(console.error);
  }

  undo() {
    this.db.saveTodo(this.backupSave).catch(console.error);
  }
}
