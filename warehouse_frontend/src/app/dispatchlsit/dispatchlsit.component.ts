import { Component, OnInit } from '@angular/core';
import { PartserviceService } from '../partservice.service';

@Component({
  selector: 'app-dispatchlsit',
  templateUrl: './dispatchlsit.component.html',
  styleUrls: ['./dispatchlsit.component.css']
})
export class DispatchlsitComponent implements OnInit {

  constructor(private service : PartserviceService) 
  {

  }

  list: any = 
  {
    id:'',
    part:
    {
      pnumber:'',
      pname:'',
      pquantity:'',
      plcation:''
    },
    name:'',
    quantity:'',
    date:''

  };
  ngOnInit(): void 
  {
    this.service.dispatchlist().subscribe
    (
      dlist =>
      {
        console.log(dlist);
        this.list = dlist;
        console.log(this.list);
      }
    );
  }




}
