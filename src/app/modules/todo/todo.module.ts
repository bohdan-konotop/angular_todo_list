import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";

import { InfoComponent } from "./info/info.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { TodoComponent } from "./todo.component";
import { HeaderProfileComponent } from "./header-profile/header-profile.component";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { TodoValidatorComponent } from "./todo-validator/todo-validator.component";

const routes: Routes = [
  {
    path: "",
    component: TodoComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  declarations: [
    TodoComponent,
    InfoComponent,
    TodoListComponent,
    AddTodoComponent,
    HeaderProfileComponent,
    TodoValidatorComponent,
  ],
  exports: [TodoComponent],
})
export class TodoModule {}
