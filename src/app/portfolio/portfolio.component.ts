import { Component, OnInit } from '@angular/core';
import { PortfolioAPIService } from '../portfolio-api.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  stocks: any[] = [];
  currencies: any[] = [];

  totalValue: number = 0;
  totalPurchaseValue: number = 0;
  totalGain: number = 0;
  percentGain: number = 0;

  loading: boolean = true;
  canSell: boolean = true;
  currencyMessage: string = "";
  stockMessage: string = "";

  stockColumns: string[] = ["symbol", "name", "quantity", "purchasePrice", "lastPrice", "purchaseValue", "currentValue", "sell"]
  currencyColumns: string[] = ["code", "name", "symbol", "quantity", "purchasePrice", "lastPrice", "purchaseValue", "currentValue", "sell"]

  constructor(private portfolioAPI: PortfolioAPIService) { }

  ngOnInit(): void {
    this.updatePortfolio();
  }

  sellCurrency(index: number) {
    console.log("Selling currency: ", index)
  }

  sellStock(index: number) {
    console.log("Selling stock: ", index);
  }

  updatePortfolio() {
    this.loading = true;
    this.portfolioAPI.getPortfolio()
    .subscribe((payload) => {
      console.log("Payload: ", payload)
      this.currencies = payload.currencies
      this.stocks = payload.stocks
      console.log("Currencies from API: ", this.currencies)
      console.log("Stocks from API: ", this.stocks)

      this.loading = false;
    })
  }

}
