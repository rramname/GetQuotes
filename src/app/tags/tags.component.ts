import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteService } from '../../Services/quote.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor(private service:QuoteService,private router:Router) { }

  ngOnInit() {
    this.tags=this.service.GetTags().then((data)=>this.tags=data["tags"]);
  }

  getQuotesByTag(tag){
    console.log("tag"+tag)
    this.router.navigate(["tags",tag])
  }
  tags:any;

}
