import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { InfoComponent } from "./info/info.component";
import { MainComponent } from "./main/main.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { TodoComponent } from "./todo.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: TodoComponent,
  },
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  declarations: [TodoComponent, InfoComponent, MainComponent, AddTodoComponent],
  exports: [TodoComponent],
})
export class TodoModule {}
