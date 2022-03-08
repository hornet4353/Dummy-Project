import { Component, OnInit } from '@angular/core';
import { PartserviceService } from '../partservice.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit 
{

  constructor(private service : PartserviceService) 
  {

  }


  order : any = 
  {
    id: '',
    name: '',
    quantity: '',
    part : 
    {
      pnumber: ''
    },
    date: ''

  }

  ngOnInit(): void 
  {
    this.service.getlistoforder().subscribe
    (
      dd =>
      {        
        this.order = dd;
        console.log(this.order);
      }
    )
  }

}
