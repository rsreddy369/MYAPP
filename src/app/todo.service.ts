
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todolist:any=[];
  public todoListSub:BehaviorSubject<any>=new BehaviorSubject([]);
  public viewtodoSub:BehaviorSubject<any>=new BehaviorSubject([]);
  public edittodo:any={};
  public edittodoSub:BehaviorSubject<any>=new BehaviorSubject({});


  constructor() { }
  setTodo(todo:any){
    this.todolist.push(todo);
    this.todoListSub.next(this.todolist);
  }
  getTodos(){
    return this.todoListSub.asObservable();

  }

  settodo1(todo:any){
 this.viewtodoSub.next(todo);
  }

  gettodo1(){
    return this.viewtodoSub.asObservable();
  }

settodoedit(todo:any){
  this.edittodoSub.next(todo);

}
gettodoedit(){
  return this.edittodoSub.asObservable();
}


}
