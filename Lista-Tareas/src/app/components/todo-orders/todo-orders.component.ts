import { Orders } from './../../types/orders.commons';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from 'src/app/services/todos.service';
import { OrderOptions } from 'src/app/config/options';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-todo-orders',
  standalone: true,
  imports: [CommonModule, DropdownComponent],
  templateUrl: './todo-orders.component.html',
  styleUrls: ['./todo-orders.component.scss']
})
export class TodoOrdersComponent {
  private todoService = inject(TodosService);

  public selectedOrder: {value: Orders, name: string} = OrderOptions[0];
  public orderOptions = OrderOptions;

  orderByDate(selectedOrder:  {value: Orders, name: string}){
    this.selectedOrder = selectedOrder;
    this.todoService.orderByDate(selectedOrder.value);
  }

}
