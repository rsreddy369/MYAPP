import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  public i:number=0;

  constructor( private _calcService:CalcService) { }

  ngOnInit(): void {
  }
  Add(i:any){



  }
  Sub(i:any){

  }
  Mul(i:any){

  }
  Div(i:any){
    
  }

}
