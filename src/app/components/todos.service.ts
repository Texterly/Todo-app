import {
  ApplicationRef,
  ChangeDetectorRef,
  inject,
  Injectable,
} from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private appRef: ApplicationRef = inject(ApplicationRef);

  getTodosLocalStorage(): Todo[] {
    const todosJSON = localStorage.getItem('todoList');
    setTimeout(() => this.appRef.tick());
    return todosJSON ? JSON.parse(todosJSON) : [];
  }

  inputTodo: string = '';

  // addTodo() {}

  // updateTodo(id: number) {
  //   let todos: Todo[] = this.getTodosLocalStorage();
  //   const todo: Todo | undefined = todos.find((v: any, i: number) => i === id);
  // }

  // getTodo() {}

  // deleteTodo(id: number) {
  //   let todos = this.getTodosLocalStorage();
  //   todos = todos.filter((v: any, i: number) => i !== id);
  //   localStorage.setItem('todoList', JSON.stringify(todos));
  // }
}
