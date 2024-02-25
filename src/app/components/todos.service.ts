import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todosJSON: any;
  getTodosLocalStorage() {
    this.todosJSON = localStorage.getItem('todoList');
    return this.todosJSON ? JSON.parse(this.todosJSON) : [];
  }
  todos = this.getTodosLocalStorage();
  inputTodo: string = '';

  //   deleteTodo(id: number) {
  //     this.todos = this.todos.filter((v: any, i: number) => i !== id);
  //   }
  //   addTodo() {
  //     this.todos.push({
  //       title: this.inputTodo,
  //       completed: false,
  //     });

  //     this.inputTodo = '';
  //   }
}
