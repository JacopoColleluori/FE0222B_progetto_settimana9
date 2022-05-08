import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  control = true;
  task: string = ' ';
  taskArray!: Todo[];
  todoArray!: Todo[];
  message: string = ' ';
  caricamento = false;

  constructor(private servizio: TodosService) {
    setTimeout(() => {
      this.taskArray = [];
      this.control = false;

      this.todoArray = servizio.recuperaTask();
      console.log(servizio.recuperaTask());
      console.log(
        this.todoArray.map((tasks) => {
          return tasks.completed == false;
        })
      );
      this.taskArray = this.todoArray.filter((tasks) => {
        return tasks.completed == false;
      });
    }, 2000);
  }

  aggiungi(title: string) {
    this.caricamento = true;

    console.log(title);
    this.taskArray.push({
      id: this.servizio.arrayTask.length + 1,
      title: title,
      completed: false,
    });
    this.caricamento = false;
    this.servizio.aggiungiTask(title);
  }

  modifica(id: number) {
    setTimeout(() => {
      for (let i = 0; i < this.taskArray.length; i++) {
        if (this.taskArray[i].id == id) {
          this.servizio.modificaTask(id - 1);
          this.taskArray.splice(i, 1);
          console.log(this.taskArray, this.servizio.arrayTask);
          return;
        }
      }
    }, 2000);
  }

  messageTask() {
    if (this.taskArray?.length > 0) {
      this.message = `Le task rimarranno fino a quando l'applicazione non verrà ricaricata`;
    } else {
      this.message = 'Non ci sono task da completare';
    }
    return this.message;
  }
  clear(){
    this.task='';
  }
  ngOnInit(): void {}
}
