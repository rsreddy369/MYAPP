import { Component, OnInit } from '@angular/core';
import { CommonserverService } from '../commonserver.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
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
