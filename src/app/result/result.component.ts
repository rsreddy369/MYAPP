import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private _calcService:CalcService) { }

  ngOnInit(): void {
  }

}
