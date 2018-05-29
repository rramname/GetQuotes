import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { QuoteService } from '../../Services/quote.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private server:QuoteService) { }

  ngOnInit() {
    this.items=[
      {
        label:'Authors'
      },
      {
        label:'Tags'
      },
      {
        label:'Users'
      },
      {separator:true},
            {
                label: 'Activity'
            },
            {
              label: 'Followers'
          },
          {separator:true},
            {
                label: 'Logout'
            }
    ]


    this.server.home().then((data)=>{console.log(data); this.connectionStatus=data})
  
  }  
  
  items:MenuItem[];
  connectionStatus:any;
}
