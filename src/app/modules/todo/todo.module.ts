import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { InfoComponent } from "./info/info.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { TodoComponent } from "./todo.component";
import { RouterModule, Routes } from "@angular/router";
import { HeaderProfileComponent } from './header-profile/header-profile.component';

const routes: Routes = [
  {
    path: "",
    component: TodoComponent,
  },
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  declarations: [
    TodoComponent,
    InfoComponent,
    TodoListComponent,
    AddTodoComponent,
    HeaderProfileComponent,
  ],
  exports: [TodoComponent],
})
export class TodoModule {}
