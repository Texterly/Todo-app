import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/Todo';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskDetailComponent],
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
  newTodo!: string;
  task!: void;

  generateId() {
    this.time = Date.now();
    this.randomPart = Math.floor(Math.random() * 10000);
    this.randomPartTwo = Math.floor(Math.random() * 10000);
    return this.time + this.randomPart + this.randomPartTwo;
  }

  constructor(
    public todosService: TodosService,
    public route: ActivatedRoute,
    private location: Location
  ) {
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

  isValidIndex(index: number): boolean {
    return index >= 0 && index < this.todos.length;
  }

  editTodo(index: number, newTodo: string): void {
    if (this.isValidIndex(index)) {
      this.todos[index].title = newTodo[0].toUpperCase() + newTodo.slice(1);
    } else return;
    this.newTodo = '';
    this.setLocalSorage();
  }

  getTaskById(id: number) {
    const foundTask = this.todos.filter((v, i) => i === id);
    console.log(foundTask);
  }

  goBack(): void {
    this.location.back();
  }
  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((params) => {
  //     const taskId = +params.get('id');
  //     this.task = this.getTaskById(taskId);
  //   });
  // }
}
