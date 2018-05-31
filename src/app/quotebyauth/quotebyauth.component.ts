import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuotesController } from '../../../MiddleTier/Controllers/QuotesController';
import { QuoteService } from '../../Services/quote.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-quotebyauth',
  templateUrl: './quotebyauth.component.html',
  styleUrls: ['./quotebyauth.component.css']
})
export class QuotebyauthComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service:QuoteService) { }

  ngOnInit() {
    this.route.params
      .switchMap((data)=>
        this.service.GetQuotesByAuthor(data["author"]).then((quotes)=>this.authQuotes=quotes)

      )
      .subscribe();
  }

  authQuotes:any;

}
