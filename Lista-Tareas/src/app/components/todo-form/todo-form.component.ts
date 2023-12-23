import { TodosService } from 'src/app/services/todos.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStatus } from 'src/app/types/type.commons';
import { FormOptions } from 'src/app/config/options';
import { ITodo } from 'src/app/interfaces/todo.interface';
import { FormsModule, NgModel } from '@angular/forms';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownComponent],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  private todosService = inject(TodosService);

  public newTodoDescription: string = '';
  public newTodoStatus: {value: TodoStatus, name: string} = FormOptions[0];
  public statusOptions = FormOptions;

  public addTodo(){
    const newTodo: ITodo = {
      id: Math.random(),
      description: this.newTodoDescription,
      status: this.newTodoStatus.value,
      createdAt: new Date(),
    };
    this.todosService.addTodo(newTodo);

    this.newTodoDescription = '';
    this.newTodoStatus = FormOptions[0];
  }

  public changeStatus(newStatus: {value: TodoStatus, name: string}){
    this.newTodoStatus = newStatus;
  }
}
