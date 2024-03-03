import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app/task/:id', component: TaskDetailComponent },
  { path: '**', component: NotFoundComponent },
];
