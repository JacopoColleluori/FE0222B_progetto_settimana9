import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodosService } from 'src/app/services/todos.service';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss'],
})
export class CompletatiComponent implements OnInit {
  arrayCompl!: Todo[];
  arrayVista!: Todo[];
  caricamento = true;
  message = '';
  constructor(private servizio: TodosService) {
    setTimeout(() => {
      this.arrayCompl = [];
      this.arrayVista=[];
      this.caricamento = false;
      this.arrayVista = servizio.recuperaTask();
      this.arrayCompl = this.arrayVista.filter((tasks) => {
        return tasks.completed == true;
      });
      console.log(this.arrayCompl)
    }, 2000);
  }
  messageTask() {
    if (this.arrayCompl?.length > 0) {
      this.message = `Ecco le task completate!!!`;
    } else {
      this.message = 'Non ci sono task completate';
    }
    console.log(this.arrayCompl)
    return this.message;
  }
  ngOnInit(): void {}
}
