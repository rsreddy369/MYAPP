import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent implements OnInit {
  public displaydata:any=[];

  constructor(private _todoService:TodoService) { 
    _todoService.getTodos().subscribe(
      (todolist:any)=>{
        this.displaydata=todolist;
      }
    )
  }

  ngOnInit(): void {
  }
  delete(index:any){
    this.displaydata.splice(index,1)
  }

  view(display:any){
    this._todoService.settodo1(display);
  }
  edit(edittodo:any){
    this._todoService.settodoedit(edittodo);

  }
}
