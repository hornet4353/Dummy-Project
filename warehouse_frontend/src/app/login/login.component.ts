import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Login } from '../login';
import { PartserviceService } from '../partservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit
{
  ll: Login = new Login();
  st = "Invalid Credentials";

  constructor(private partsservice: PartserviceService, private rr: Router)
  {

  }
  ngOnInit(): void 
  {
  }

  

  onSubmit(lfdata : any)
  {
    console.log(lfdata);
    this.partsservice.getaccess(lfdata).subscribe
    
    (
      (data : any)=>
      {        
        if(data == null)
        {
          alert("Username not found in our system. If you are first time user please consider registring..!!")
        }
        if(lfdata.username == data.username && lfdata.password == data.password)
        {
          alert("You have Successfully Logged In");
          console.log(data.fullname);
          
          sessionStorage.setItem('userid','yes');
          sessionStorage.setItem('id',''+data.userid);
          sessionStorage.setItem('name',''+data.fullname);
          this.rr.navigate(['/home']);
        }
        else
        {
          alert("Invalid Credentials..!!")
        }
      }
    );
  }

}
