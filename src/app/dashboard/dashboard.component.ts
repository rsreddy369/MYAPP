import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
logout(){
  sessionStorage.removeItem('my-app-token');
  this._router.navigateByUrl('/login');
}

}
