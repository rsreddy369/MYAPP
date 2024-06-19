import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  public inputlist:any=[];
  public inputListSub:BehaviorSubject<any>=new BehaviorSubject([]);

  constructor() { }

  setvalue(data:any){
    this.inputlist.push(data);
    this.inputListSub.next(this.inputlist);

  }
  getvalue(){
    return this.inputListSub.asObservable();
  }
}
