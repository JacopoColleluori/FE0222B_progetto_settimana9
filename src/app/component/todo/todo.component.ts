import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  control = true;
  task: string = ' ';
  lista="non ci sono task"

  constructor() {
    setTimeout(() => {
      this.control = false;
    }, 2000);
  }

  aggiungiTask(){

  }
  ngOnInit(): void {}
}
