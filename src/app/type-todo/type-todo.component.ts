import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-type-todo',
  templateUrl: './type-todo.component.html',
  styleUrls: ['./type-todo.component.css']
})
export class TypeTodoComponent implements OnInit {
  public typetodo:FormGroup=new FormGroup({
    task:new FormControl(),
    time:new FormControl(),
  })

  constructor(private _todoService:TodoService) {
    _todoService.gettodoedit().subscribe(
      (data:any)=>{
        this.typetodo.patchValue(data);
      }
    )
   }

  ngOnInit(): void {
  }
  create(){
    this._todoService.setTodo(this.typetodo.value);
  }
  reset(){
    this.typetodo.reset();
  }
}
