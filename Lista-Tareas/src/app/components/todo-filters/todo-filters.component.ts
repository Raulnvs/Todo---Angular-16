import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterStatus } from 'src/app/types/filter-status.commons';
import { FilterOptions } from 'src/app/config/options';
import { TodosService } from 'src/app/services/todos.service';
import { Traductions } from 'src/app/utils/traductions';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-todo-filters',
  standalone: true,
  imports: [CommonModule, DropdownComponent],
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent {

  public selectedStatus: {name: string, value: FilterStatus } = FilterOptions[0];

  private todosService = inject(TodosService);
  public filterOptions = FilterOptions;


  constructor(){
   this.todosService.filterSubject.pipe().subscribe(filter => {
    this.selectedStatus = {name: Traductions[filter], value: filter};
   });
  }

  public filterByStatus(selectedStatus: {name: string, value: FilterStatus}){
    this.todosService.filterByStatus(selectedStatus.value);
  }

}
