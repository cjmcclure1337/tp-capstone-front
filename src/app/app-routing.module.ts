import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { ForexComponent } from "./forex/forex.component"

const routes: Routes = [
  { path: "portfolio", component: PortfolioComponent},
  { path: "forex", component: ForexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
