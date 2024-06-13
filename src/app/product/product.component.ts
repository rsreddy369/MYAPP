import { Component, OnInit } from '@angular/core';
import { CommonserverService } from '../commonserver.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _commonService:CommonserverService) { }

  ngOnInit(): void {
  }
  add(){
    this._commonService.setvalue();
  }

}
