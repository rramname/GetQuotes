import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

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
  }  
  
  items:MenuItem[];
}
