import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit 
{
  login: Login = new Login();

  constructor(private r: Router) { }

  ngOnInit(): void 
  {
    sessionStorage.setItem('userid','false');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('name');
    this.r.navigate(['/login']);
  }

}
