import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
})
export class DetailTaskComponent implements OnInit {

  taskList: Task[];
  task: Task|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private TaskService: TaskService,
  ) { }

  ngOnInit(): void {
    const taskId: string|null = this.route.snapshot.paramMap.get('id');
    if(taskId){
      this.TaskService.getTaskById(+taskId)
        .subscribe(task => this.task = task);
    }
  }

  deleteTask(task: Task){
    this.TaskService.deleteTaskById(task.id)
      .subscribe(() => this.goToTaskList());
  }

  goToTaskList(){
    this.router.navigate(['/tasks']);
  }
}
