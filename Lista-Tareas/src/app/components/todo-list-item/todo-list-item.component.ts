import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITodo } from 'src/app/interfaces/todo.interface';
import { DatePipe } from 'src/app/pipes/date.pipe';
import { TodosService } from 'src/app/services/todos.service';
import { FormOptions } from 'src/app/config/options';
import { Traductions } from 'src/app/utils/traductions';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { TodoStatus } from 'src/app/types/type.commons';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule, DatePipe, DropdownComponent],
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input() todo?: ITodo;

  private todosService = inject(TodosService);
  public statusOptions = FormOptions;

  get optionSelected(){
    return {value: this.todo?.status, name:Traductions[this.todo?.status!]}
  }
  public removeTodo(){
    if(!this.todo) return;
    this.todosService.removeTodo(this.todo.id);
  }

  public changeStatus(newStatus: {value: TodoStatus, name: string}){
    if(this.todo?.id){
      this.todosService.changeTodoStatus(this.todo.id, newStatus.value);
    }
  }
}
