import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TasksService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public tasks : Task[];
  constructor(private taskService: TasksService){}

  ngOnInit(){
    this.getTasks();
  }

  public getTasks(): void{
    this.taskService.getTasks().subscribe(
      (respose: Task[]) => {
         this.tasks = respose;
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
