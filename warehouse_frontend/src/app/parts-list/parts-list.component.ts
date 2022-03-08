import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parts } from '../parts';
import { PartserviceService } from '../partservice.service';

@Component
({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent implements OnInit
{
  // pts: Parts[];
  parts=[
    {pnumber:'',
      pname:'',
      plocation:'',
      pquantity:''
    }
  ];

  constructor( private partservice: PartserviceService, private rr : Router ) 
  {
   }

  ngOnInit(): void 
  {
    
     this.partservice.getpartslist().subscribe((data:any)=>
       {
          console.log(this.parts);
         this.parts=data;
       }
     )
  }

  calldelete(number : any)
  {
    console.log(number);
    this.partservice.deletepart(number).subscribe
    (
      (data : any)=>
      {
        if(data)
        {
          alert("Part Deleted Successfully");
          window.location.reload();
          this.rr.navigate(['/partslist']);
        }
        else
        {
          alert("Some Error occured please try again..!!");
        }
      }
    );
  }

}
