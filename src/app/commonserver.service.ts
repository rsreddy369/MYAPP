import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserverService {

  public count:number=0;
  public countSub:BehaviorSubject<number>=new BehaviorSubject(0);

  constructor() { }
  setvalue(){
    this.count=this.count+1;
    this.countSub.next(this.count);
  }
  getvalue(){
    return this.countSub;
  }
}
