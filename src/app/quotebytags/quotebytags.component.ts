import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../../Services/quote.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-quotebytags',
  templateUrl: './quotebytags.component.html',
  styleUrls: ['./quotebytags.component.css']
})
export class QuotebytagsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service:QuoteService) { }

  ngOnInit() {
    this.route.params
      .switchMap((data)=>
        this.service.GetQuotesByTag(data["tag"]).then((quotes)=>this.tagQuotes=quotes)
      )
      .subscribe();
  }

  tagQuotes:any;
}
