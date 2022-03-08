import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartserviceService } from '../partservice.service';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.css']
})
export class DispatchComponent implements OnInit {
  checkdispatch: FormGroup;
  variable:boolean = false;
  
  constructor(private formBuilder:FormBuilder, private service : PartserviceService, private rr : Router) 
  {

  }

  ngOnInit(): void 
  {
    this.checkdispatch = this.formBuilder.group
    ({
      id:['', Validators.required],
      quantity:['', Validators.required],
      name : ['', Validators.required] 
    })
  }

  chechd(data1 : any)
  {
    console.log(data1);
    this.service.getchecked(data1).subscribe
    ( (data: any) =>
      { 
        this.variable = data
        if(data)
        {
          alert("Part is available with quantity");
        }
        else
        {
          alert("Please enter peoper part number or else quantity might be less")
        }
      }
    );
  }

  placeorder(data2 : any)
  {
    console.log(data2);
    this.service.dorder(data2).subscribe(
      (d : any) =>
      {
          alert("Successfully Placed order..!!");
          if(d)
          {
            this.rr.navigate(['/dispatch-part-list']);
          }
      }
      
      );
  }


  dispatchlist()
  {
    this.rr.navigate(['/dispatch-part-list']);
  }

}
