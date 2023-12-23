import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITodo} from "../../interfaces/todo.interface";
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todoList?: ITodo[];
}
