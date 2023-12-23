import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/todo.interface';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { TodoStatus } from '../types/type.commons';
import { FilterStatus } from '../types/filter-status.commons';
import { Orders } from '../types/orders.commons';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: ITodo[] = [];
  private todosSubject = new BehaviorSubject<ITodo[]>(this.todos);
  public filterSubject = new BehaviorSubject<FilterStatus>('all');

  constructor(){
    this.loadFromLocalStorage();
    this.setupFiltering();
  }

  public addTodo(newTodo: ITodo){
    this.todos.push(newTodo);
    this.update();
  }

  public removeTodo(todoId: ITodo['id']){
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    this.update();
  }

  public getTodos(): Observable<ITodo[]>{
    return this.todosSubject.asObservable();
  }

  private loadFromLocalStorage(){
    const storedTodos = localStorage.getItem('todos');
    if(storedTodos){
      this.todos = JSON.parse(storedTodos);
    }
  }

  private update(){
    this.todosSubject.next(this.todos);
  }

  private updateLocalStorage(){
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }


  public changeTodoStatus(todoId: ITodo['id'], newStatus: TodoStatus){
    const todoIndex = this.todos.findIndex(todo => todo.id === todoId);

    if(todoIndex === -1) return;

    this.todos[todoIndex].status = newStatus;
    this.update();

  }

  private setupFiltering(){
    this.filterSubject.subscribe((status) => {
      const filteredTodos =
        status === 'all'
          ? this.todos
          : this.todos.filter((todo) => todo.status === status);
      this.todosSubject.next(filteredTodos);
    });
  }

  public filterByStatus(status: FilterStatus){
    this.filterSubject.next(status);
    return this.todosSubject.asObservable();
  }

  public orderByDate(order: Orders){
    this.todos.sort((a,b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return order === 'newest' ? dateB - dateA : dateA - dateB;
    });
    this.update();
  }


}
