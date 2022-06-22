import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";

import { TodoList } from "../../../interfaces/todo-list.interface";
import { TodoService } from "../../../services/todo.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  form = this.fb.group({ todos: this.fb.array([]) });
  todoList: TodoList[] = [];
  showInputArray: boolean[] = [];

  constructor(private todoService: TodoService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.patchTodos();
  }

  private patchTodos() {
    this.todoService.getTodoListObservable().subscribe((todoList) => {
      this.todos.value.forEach(() => {
        this.removeFromForm(this.todos.value.length - 1);
      });
      todoList.forEach((todo) => {
        this.addControl(todo);
      });
      this.todoList = todoList;
      this.showInputArray = Array(todoList.length).fill(false);
    });
  }

  get todos() {
    return this.form.get("todos") as FormArray;
  }

  formTodo(initValue: TodoList) {
    return this.fb.group({
      todo: this.fb.control(initValue.text, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(54),
      ]),
      active: initValue.active,
    });
  }

  addControl(initValue: TodoList) {
    this.todos.push(this.formTodo(initValue));
  }

  removeFromForm(i: number): void {
    this.todos.removeAt(i);
  }

  deleteTodo(todoId: number) {
    this.todoService.deleteTodo(todoId);
  }

  changeCheckbox(i: number) {
    this.todoService.changeCheckbox(i);
    this.updateAllComplete();
  }

  allChecked(checked: boolean) {
    this.todoService.allChecked(checked);
  }

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.form.value.todos.every(
      (item: TodoList) => item.active
    );
  }

  someComplete() {
    const todoFiltered =
      this.form.value.todos?.filter((todo: TodoList) => todo.active) || false;

    return !(
      this.form.value.todos &&
      (todoFiltered.length === this.form.value.todos.length ||
        todoFiltered.length === 0)
    );
  }

  updateInputBtn(index: number) {
    if (this.todos.controls[index].invalid) {
      this.showInputArray[index] = false;
      return;
    }
    this.showInputArray[index] =
      this.todoList[index].text !== this.form.value.todos[index].todo;
  }

  changeTodoText(index: number) {
    const value = this.form.value.todos[index].todo;
    this.todoService.changeTodoText(index, value);
  }
}
