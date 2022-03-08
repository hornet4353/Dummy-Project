import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import Validation from '../utils/validation';
import { Router } from '@angular/router';
import { PartserviceService } from '../partservice.service';



@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit 
{
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private service : PartserviceService, private rr : Router) 
  {

  }

  
  
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        mob: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        acceptTerms: [false, Validators.requiredTrue],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(data : any): void 
  {
    this.submitted = true;

    if (this.form.invalid) 
    {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    this.submitingdata(data);

  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


  submitingdata(ob : any)
  {
    this.service.putuserdata(ob).subscribe
    (
      (bb : any)=>
      {
        if(bb)
        {
          alert("Registration Succesfull..!!!")
          this.rr.navigate(['/login']);
        }
        else
        {
          alert("Something Went Wrong.. Please Register Again..!!")
        }
      }
    );
  }





}
 


