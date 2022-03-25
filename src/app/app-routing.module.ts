import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { ForexComponent } from "./forex/forex.component"
import { StocksComponent } from './stocks/stocks.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: "portfolio", component: PortfolioComponent},
  { path: "forex", component: ForexComponent},
  { path: "stocks", component: StocksComponent},
  { path: "", component: HomeComponent},
  { path: "signup", component: SignupComponent},
  { path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
