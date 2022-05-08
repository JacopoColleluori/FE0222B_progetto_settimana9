import { Component } from '@angular/core';
import { Todo } from './interfaces/todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FE0222B-progetto-settimana9';
  arrayTask!:Todo[];
}
