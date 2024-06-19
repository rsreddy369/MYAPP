import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CalcService } from '../calc.service';
import { ReloadComponent } from '../reload/reload.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public input:FormGroup=new FormGroup({
    num1:new FormControl(),
    num2:new FormControl(),
  })

  constructor(private _calService:CalcService) {
    _calService.getvalue().subscribe(
      (data:any)=>{
        this.input.patchValue(ReloadComponent)
      }
    )
   }

  ngOnInit(): void {
  }

}
