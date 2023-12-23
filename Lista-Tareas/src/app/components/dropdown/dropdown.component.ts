import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowComponent } from './arrow/arrow.component';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, ArrowComponent],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() placeholder?: string;
  @Input() options: any[] = [];
  @Input() optionSelected?: any;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  public open: boolean = false;

  public toggleDropdown(){
    this.open = !this.open;
  }

  public selectOption(option: any){
    this.onSelect.emit(option);
    this.open = false;
  }



}
