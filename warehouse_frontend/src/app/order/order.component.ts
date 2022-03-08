import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartserviceService } from '../partservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit 
{

  ordercheck : FormGroup;
  bth1 : boolean = false;
  submitted : boolean = false;


  constructor(private fb: FormBuilder, private service: PartserviceService, private rr: Router) 
  {
  }

  ngOnInit(): void 
  {
    this.ordercheck = this.fb.group
    ({
      id : new FormControl('', Validators.required),
      quantity :['', Validators.required],
      name : new FormControl('', Validators.required)
    });
    console.log(this.bth1);
  }

  checko(formdata : any)
  {
    console.log(formdata);
    this.service.getordercheck(formdata).subscribe
    (
      (data : any)=>
      {
        this.bth1 = data;
        if(data)
        {
          alert("The Part is available with in warehouse")
        }
        else
        {
          alert("The part number entered isnt allocated");
        }
      }
    );    
  }

  placeorder(data2 :  any)
  {
    console.log(data2)
    this.service.putorder(data2).subscribe
    (
      (putdata : any)=>
      {
        if(putdata)
        {
          alert("Order Placed Successfully...!!")
          this.rr.navigate(['/order-part-list']);
        }
      }
    );
  }


  orderlistpage()
  {
    this.rr.navigate(['/order-part-list'])
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ordercheck.controls;
  }

}
