// import { faTimes } from './../../../../node_modules/@fortawesome/free-solid-svg-icons/faTimes.d';
import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TaskItemComponent {
  @Input() task: Task = {} as Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
 

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }


  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }
}
