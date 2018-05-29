import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../Services/quote.service';
import { QuoteModel } from '../../../models/Quote.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private server:QuoteService) { }

  ngOnInit() {
    this.server.home().then((data)=>{console.log(data); this.quote=data})
  }

  quote:QuoteModel

}
