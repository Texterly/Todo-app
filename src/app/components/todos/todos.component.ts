import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/Todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  todos: Todo[];
  inputTodo: string;
  clicked: boolean = false;
  constructor(public todosService: TodosService) {
    this.todos = todosService.todos;
    this.inputTodo = todosService.inputTodo;
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    localStorage.setItem('todoList', JSON.stringify(this.todos));
  }
  addTodo() {
    this.todos.push({
      title: this.inputTodo,
      completed: false,
    });

    this.inputTodo = '';
    localStorage.setItem('todoList', JSON.stringify(this.todos));
  }

  done() {
    this.clicked = !this.clicked;
  }

  // deleteTodo(id: number) {
  //   this.todosService.deleteTodo(id);
  // }

  // addTodo() {
  //   this.todosService.addTodo();
  // }
}
