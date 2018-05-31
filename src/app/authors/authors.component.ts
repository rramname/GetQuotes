import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../Services/quote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private service:QuoteService,private router:Router) { }

  ngOnInit() {
      this.authors=this.service.typesHeades["authors"];
      console.log(this.authors);
  }

  getQuotesByAuthor(auth){
    this.router.navigate(["authors",auth])
  }

  authors:string[];

}
