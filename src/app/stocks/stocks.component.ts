import { Component, OnInit } from '@angular/core';
import { StockAPIService } from '../stock-api.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  stocks: any[] = [];
  quantities: string[] = [];

  currentUser: number = 5;

  alertMessage: string = "";
  canBuy: boolean = true;
  loading: boolean = true;

  displayedColumns: string[] = ["symbol", "name", "price", "quantity", "buy"]

  constructor(private stockAPI: StockAPIService) { }

  ngOnInit(): void {
    this.loading = true;
    this.stockAPI.getStockInformation()
    .subscribe((payload) => {
      this.stocks = payload
      this.stocks.map(() => {
        this.quantities.push("0");
      })
      this.loading = false;
    })
  }

  buy(index: number) {
  }

  clear(index: number) {
    this.quantities[index] = "0";
  }

}
