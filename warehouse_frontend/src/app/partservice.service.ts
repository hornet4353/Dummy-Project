import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { LoginComponent } from './login/login.component';
import { Parts } from './parts';
import {environment} from '../environments/environment'


@Injectable
({
  providedIn: 'root'
})


export class PartserviceService
{
  private baseURL  = "http://localhost:8080/part";
  private loginurl = "http://localhost:8080/login";
  private dispatchurl = 'http://localhost:8080/dispatch';

 
 
  constructor(private httpclient: HttpClient)
  {
  }

  getpartslist()
  {
    return this.httpclient.get(`${this.baseURL}`);
  }

  insertpart(insert: Parts): Observable<Object>
  {
    return this.httpclient.post(`${this.baseURL}`, insert);
  }

  getaccess(login: Login): Observable<Object>
  {
    return this.httpclient.post(`${this.loginurl}`,login);
  }

  
  getchecked(d : any)
  {
    return this.httpclient.get(environment.baseUrl+'dispatch/'+d.id+'/'+d.quantity);
  }

  dorder(dobj : any )
  {
    return this.httpclient.post(`${this.dispatchurl}`, dobj);
  }
  dispatchlist()
  {
    return this.httpclient.get(`${this.dispatchurl}`);
  }




  getordercheck(o : any)
  {
    return this.httpclient.get(environment.baseUrl+'orderpart/'+o.id+'/'+o.quantity);
  }
  putorder(d : any)
  {
    return this.httpclient.post(environment.baseUrl+'orderpart', d);
  }
  getlistoforder()
  {
    return this.httpclient.get(environment.baseUrl+'orderpart')
  }


  putuserdata(object : any)
  {
    return this.httpclient.post(environment.baseUrl+'registrationuser', object);
  }

  deletepart(n : any)
  {
    return this.httpclient.delete(environment.baseUrl+'part/'+n);
  }


  emailcheckbackend(object : any)
  {
    return this.httpclient.get(environment.baseUrl+'registrationuser/'+object.email);
  }
  updatepasswordandusername(user : any)
  {
    return this.httpclient.put(environment.baseUrl+'registrationuser', user);
  }


}
