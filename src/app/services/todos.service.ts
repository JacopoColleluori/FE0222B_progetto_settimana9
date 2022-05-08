import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  arrayTask!: Todo[];
  constructor() {
    this.arrayTask = [];
  }

  recuperaTask() {
    return this.arrayTask;
  }

  modificaTask(id:number) {
    this.arrayTask[id].completed=true;
  }

  aggiungiTask(title:string) {
    console.log('entrato');
    this.arrayTask.push({
      id:this.arrayTask.length+1,
      title:title,
      completed:false
    })
  }
}

