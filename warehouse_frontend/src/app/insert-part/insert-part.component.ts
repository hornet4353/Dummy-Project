import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parts } from '../parts';
import { PartserviceService } from '../partservice.service';

@Component({
  selector: 'app-insert-part',
  templateUrl: './insert-part.component.html',
  styleUrls: ['./insert-part.component.css']
})



export class InsertPartComponent implements OnInit 
{
  insert: Parts = new Parts();
  st: String = "access denied";

  constructor(private partservice: PartserviceService, private rr: Router) 
  {
  }

  ngOnInit(): void 
  {
  }
  onSubmit()
  {
    console.log(this.insert);
    this.savepart();
  }

  savepart()
  {
    this.partservice.insertpart(this.insert).subscribe
    ( data => 
      {
        console.log(data);
        this.gotolist();
        // if(data==true)
        // {
        //   this.gotolist();
        // }
        // else
        // {
        //   alert(this.st);
        //   this.gotoinsert();
        // }
        
      },
      (error: any) => console.log(error)
    );
  }

  gotolist()
  {
    this.rr.navigate(['/partslist']);
  }

  gotoinsert()
  {
    this.rr.navigate(['/insert-part']);
  }

}
