import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of , tap } from "rxjs";
import { Task } from "./task";

@Injectable()
export class TaskService {
    
    constructor(private http: HttpClient) {}

    getTask(): Observable<Task[]> {
        return this.http.get<Task[]>('api/tasks').pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, []))
        )   
    }

    getTaskById(taskId: number): Observable<Task|undefined>{
        return this.http.get<Task>(`api/tasks/${taskId}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, []))
        );
    }

    addTask(task: Task): Observable<Task> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/jsob'})
        };
        return this.http.post<Task>(`api/tasks`, task, httpOptions).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, []))
        )
    }
    
    updateTask(task: Task): Observable<null>{
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/jsob'})
        };

        return this.http.put('api/tasks', task, httpOptions).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, []))
        )
    }

    deleteTaskById(taskId: number): Observable<null>{
        return this.http.delete(`api/tasks/${taskId}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, []))
        )
    }

    private log(response:any){
        console.table(response);
    }

    private handleError(error: Error, errorValue: any){
        console.error(error);
        return of(errorValue);
    }
}