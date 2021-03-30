import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Task } from './task';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TasksService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getTasks(): Observable <Task[]>{
        return this.http.get<Task[]> (`${this.apiServerUrl}/task/all`)
    }
}