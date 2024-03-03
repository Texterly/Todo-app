import { CommonModule } from '@angular/common';
import { ApplicationModule, Component } from '@angular/core';
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
  time!: number;
  randomPart!: number;
  randomPartTwo!: number;
  id!: number;

  generateId() {
    this.time = Date.now();
    this.randomPart = Math.floor(Math.random() * 10000);
    this.randomPartTwo = Math.floor(Math.random() * 10000);
    return this.time + this.randomPart + this.randomPartTwo;
  }

  constructor(public todosService: TodosService) {
    this.todos = todosService.getTodosLocalStorage();
    this.inputTodo = todosService.inputTodo;
  }

  setLocalSorage() {
    localStorage.setItem('todoList', JSON.stringify(this.todos));
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    this.setLocalSorage();
  }

  addTodo() {
    if (this.inputTodo.trim().length === 0) {
      return;
    } else {
      this.todos.push({
        id: this.generateId(),
        title: this.inputTodo[0].toUpperCase() + this.inputTodo.slice(1),
        completed: false,
      });
      this.inputTodo = '';
      this.setLocalSorage();
    }
  }

  updateTodo(i: number) {
    if (this.todos[i].id === this.id) {
      this.todos[i].title = 'sfgsagf';
    }

    console.log(this.todos[i].title);
  }
}
