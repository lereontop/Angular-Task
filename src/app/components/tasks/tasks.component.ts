import { TaskService } from './../../services/task.service';
import { Component, OnInit} from '@angular/core';
// import { TaskService } from '../../services/task.service';
import {Task} from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule,TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];


  constructor(private taskService: TaskService){}

  ngOnInit(): void{
     this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks);
  }

  deleteTask(task:Task){
    this.
    taskService.
    deleteTask(task).
    subscribe(()=>(this.tasks = this.tasks.filter(t => t.id !==task.id )));
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    console.log(task.reminder);

  }

}
