import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
  
  @Input() task: Task;
  isAddForm: boolean;

  constructor(
    private taskService: TaskService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
  }


  onSubmit() {
    if(this.isAddForm){
      this.taskService.addTask(this.task)
      .subscribe((task: Task) => this.router.navigate(['/tasks']))
    } else {
      this.taskService.updateTask(this.task)
      .subscribe(() => this.router.navigate(['/tasks']))
    }
  }

}
