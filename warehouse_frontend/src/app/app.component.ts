import { Component } from '@angular/core';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'warehouse_frontend_By_Saurabh';
  linkvariable : any;

  getaccessoflinks()
  {
     return sessionStorage.getItem('userid');
  }
  
  
}
