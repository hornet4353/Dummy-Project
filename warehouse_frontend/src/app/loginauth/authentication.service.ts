import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate
{

  constructor(private rr : Router) { }
  
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean
  {
    if( sessionStorage.getItem('userid') =='yes' )
    {
      return true;
    }
    else
    {
      this.rr.navigate(['/login']);
      return false;
    }
      
  }
}
