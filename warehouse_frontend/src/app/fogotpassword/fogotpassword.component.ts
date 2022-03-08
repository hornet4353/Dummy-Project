import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartserviceService } from '../partservice.service';

@Component({
  selector: 'app-fogotpassword',
  templateUrl: './fogotpassword.component.html',
  styleUrls: ['./fogotpassword.component.css']
})
export class FogotpasswordComponent implements OnInit 
{

  bth1 : boolean = false; 


  constructor(private ser : PartserviceService, private rr : Router) 
  { }

  ngOnInit(): void 
  {
  }



  resetfunc(ob : any)
  {
    console.log(ob);
    this.ser.updatepasswordandusername(ob).subscribe
    (
      data =>
      {
        alert("Password and Username Rest Succesfull..!!");
        this.rr.navigate(['/login'])
      }
    );
  }




  emailcheck(bb : any)
  {
    console.log(bb);
    this.ser.emailcheckbackend(bb).subscribe
    (
      (data : any) =>
      {
        if(data)
        {
          alert("Email is Valid Please proceed Further");
          this.bth1 = true;
        }
        else
        {
          alert("You are not registered!! Please Consider registring..!!");
        }
      }
    );
    
  }

}
