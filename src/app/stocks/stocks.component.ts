import { Component, OnInit } from '@angular/core';
import { StockAPIService } from '../stock-api.service';
import { UserService } from '../user.service';
import { PortfolioAPIService } from '../portfolio-api.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  stocks: any[] = [];
  currentStocks: any[] = [];
  quantities: string[] = [];

  search: string = "";

  alertMessage: string = "";
  canBuy: boolean = true;
  loading: boolean = true;

  displayedColumns: string[] = ["symbol", "name", "price", "quantity", "buy"]

  constructor(private stockAPI: StockAPIService, private user: UserService, private portfolioService: PortfolioAPIService) { }

  ngOnInit(): void {
    this.loading = true;
    this.stockAPI.getStockInformation()
    .subscribe((payload) => {
      this.stocks = payload
      this.currentStocks = payload;
      this.stocks.map(() => {
        this.quantities.push("0");
      })
      this.loading = false;
    })
  }

  buy(index: number) {
    console.log("Buying: ", this.stocks[index]);

    if(this.quantities[index]!=="0") {
      this.canBuy = false;

      this.portfolioService.buyInvestment({
        type: "stock",
        symbol: this.stocks[index].stock_symbol,
        quantity: this.quantities[index]
      })
      .subscribe((payload) => {
        console.log("Response: ", payload);
        this.alertMessage = `Purchased ${payload.quantity} shares of ${payload.symbol} for \$${payload.purchasePrice * payload.quantity}!`
        this.canBuy = true;
      })
      this.clear(index);
    }
  }

  clear(index: number) {
    this.quantities[index] = "0";
  }

  filter() {
    console.log("Filtering for: ", this.search)
    this.currentStocks = this.stocks.filter((stock) => {
      return stock.stock_name.toLowerCase().includes(this.search.toLowerCase()) || stock.stock_symbol.toLowerCase().includes(this.search.toLowerCase());
    })
  }

}
