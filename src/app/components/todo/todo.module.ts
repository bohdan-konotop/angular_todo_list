import {NgModule} from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import {CommonModule} from "@angular/common";
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import {TodoComponent} from "./todo.component";

@NgModule({
    providers: [],
    imports: [CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        TodoComponent,
        HeaderComponent,
        MainComponent,
        AddTodoComponent,
    ],
    exports: [TodoComponent],
})
export class TodoModule { }