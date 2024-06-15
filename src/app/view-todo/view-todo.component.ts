import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {
  public  viewtodo:any=[];

  constructor(private _todoService:TodoService) {
    _todoService.gettodo1().subscribe(
      (data:any)=>{
        this.viewtodo=data;
      }
    )
   }

  ngOnInit(): void {
  }

}
