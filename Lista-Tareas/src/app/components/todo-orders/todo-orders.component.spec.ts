import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoOrdersComponent } from './todo-orders.component';

describe('TodoOrdersComponent', () => {
  let component: TodoOrdersComponent;
  let fixture: ComponentFixture<TodoOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TodoOrdersComponent]
    });
    fixture = TestBed.createComponent(TodoOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
