import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent {
  task: void | undefined;
  todos!: Todo[];
  constructor(private route: ActivatedRoute) {}

  getTaskById(id: number) {
    const foundTask = this.todos.filter((v, i) => i === id);
    console.log(foundTask);
  }
  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((params) => {
  //     const taskId = +params.get('id');
  //     this.task = this.getTaskById(taskId);
  //   });
  // }
}
