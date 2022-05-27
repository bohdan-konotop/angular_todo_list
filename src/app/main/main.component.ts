import { Component, OnInit } from '@angular/core';

export interface TodoList {
  id: number,
  text: string,
  active: boolean,
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', '../styles/base.css']
})
export class MainComponent implements OnInit {

  todoList: TodoList[] = [
    {
      id: 0,
      text: 'Lorem ipsum dolor sit amnet',
      active: false,
    },
    {
      id: 1,
      text: 'Lorem consectetur adipisicing',
      active: true,
    },
    {
      id: 2,
      text: 'Amet error harum in ipsam itaque nam',
      active: false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
