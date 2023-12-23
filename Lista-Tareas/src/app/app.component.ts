import { Component, NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ITodo} from "./interfaces/todo.interface";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodosService } from './services/todos.service';
import { Subscription } from 'rxjs';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { TodoFiltersComponent } from './components/todo-filters/todo-filters.component';
import { TodoOrdersComponent } from './components/todo-orders/todo-orders.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoListComponent, TodoFormComponent, FormsModule, TodoFiltersComponent, TodoOrdersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private todosService = inject(TodosService);
  public todos?: ITodo[];
  private todosSubscription: Subscription;

  constructor() {
    this.todosSubscription = this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
    } );
  }
  ngDestroy(){
    this.todosSubscription.unsubscribe();
  }




}
