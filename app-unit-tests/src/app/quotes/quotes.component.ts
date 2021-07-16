import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { QuoteModel } from '../quote-model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  public quoteList: QuoteModel[];
  public fetchedList: QuoteModel[];
  public quoteText: String = null;

  constructor(private service: QueryService) {}

  ngOnInit() {
    this.quoteList = this.service.getQuote();
    this.service.fetchQuotesFromServer().then((data: QuoteModel[]) => {
      this.fetchedList = data;
    });
  }

  createNewQuote() {
    this.service.addNewQuote(this.quoteText);
    this.quoteText = null;
  }
}
