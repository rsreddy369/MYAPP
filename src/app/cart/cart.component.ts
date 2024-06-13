import { Component, OnInit } from '@angular/core';
import { CommonserverService } from '../commonserver.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartCount:number=0;

  constructor(private _commonService:CommonserverService) { 
    _commonService.getvalue().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }

  ngOnInit(): void {
  }

}
