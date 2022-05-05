import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';
import { CompletatiComponent } from './component/completati/completati.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletatiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
