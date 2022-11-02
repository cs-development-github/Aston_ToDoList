import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {

  taskList: Task[];

  constructor(
    private router: Router,
    private taskService: TaskService,
  ) {}

  ngOnInit(): void {
    this.taskService.getTask()
      .subscribe(taskList => this.taskList = taskList)

  }

  goToTask(task: Task){
    this.router.navigate(['/task', task.id])
  }

}
