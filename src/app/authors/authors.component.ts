import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../Services/quote.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private service:QuoteService) { }

  ngOnInit() {
      this.authors=this.service.typesHeades["authors"];
      console.log(this.authors);
  }

  authors:string[];

}
