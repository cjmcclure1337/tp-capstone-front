import { Component, OnInit } from '@angular/core';
import { ForexAPIService } from '../forex-api.service';
import { UserService } from '../user.service';
import { PortfolioAPIService } from '../portfolio-api.service';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.scss']
})
export class ForexComponent implements OnInit {

  currencies: any[] = [];
  quantities: string[] = [];

  currentUser: number = 5;

  alertMessage: string = "";
  canBuy: boolean = true;
  loading: boolean = true;

  displayedColumns: string[] = ["code", "name", "symbol", "price", "quantity", "buy"]

  constructor(private forexAPI: ForexAPIService, private user: UserService, private portfolioService: PortfolioAPIService) { }

  ngOnInit(): void {
    this.loading = true;
    this.forexAPI.getAllCurrencies()
    .subscribe((payload) => {
      this.currencies = payload
      this.currencies.map(() => {
        this.quantities.push("0");
      })
      this.loading = false;
    })
  }

  buy(index: number) {
    console.log("Buying: ", this.currencies[index]);

    if(this.quantities[index]!=="0") {
      this.canBuy = false;

      this.portfolioService.buyInvestment({
        type: "currency",
        code: this.currencies[index].code,
        quantity: this.quantities[index]
      })
      .subscribe((payload) => {
        console.log("Response: ", payload);
        this.alertMessage = `Purchased ${payload.quantity} ${payload.code} for \$${payload.purchasePrice * payload.quantity}!`
        this.canBuy = true;
      })
      this.clear(index);
    }
  }

  clear(index: number) {
    this.quantities[index] = "0";
  }

}
