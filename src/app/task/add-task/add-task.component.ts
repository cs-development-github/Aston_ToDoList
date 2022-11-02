import { Component, OnInit } from "@angular/core";
import { Task } from "../task";

@Component({
    selector: 'app-add-task',
    template: `
        <h2 class="center">Ajouter une tache</h2>
        <app-task-form [task]="task"></app-task-form>
    `
})

export class AddTaskComponent implements OnInit {
    
    task: Task;

    ngOnInit():void {
        this.task = new Task();
    }
}