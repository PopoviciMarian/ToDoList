import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  public deliteTask(task: Task):void{
    this.taskService.deleteTask(task.id).subscribe(
      (response :void)=>{
        console.log(response);
        this.getTasks();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  
  public addTask(task :Task, string: string):void{
  
    task.description = string;
    task.title = "task";
    
    console.log(task);
    
    this.taskService.addTask(task).subscribe(
      (response : Task) =>{
        console.log(response);
        this.getTasks();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }  
 
}
