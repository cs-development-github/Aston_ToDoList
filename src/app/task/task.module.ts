import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';

const taskRoutes: Routes = [
  {path: 'task/add', component: AddTaskComponent },
  {path: 'tasks', component: TaskListComponent },
  {path: 'task/:id', component: DetailTaskComponent },
]

@NgModule({
  declarations: [
    TaskListComponent,
    DetailTaskComponent,
    TaskFormComponent,
    AddTaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(taskRoutes)
  ],
  providers: [TaskService]
})

export class TaskModule { }
