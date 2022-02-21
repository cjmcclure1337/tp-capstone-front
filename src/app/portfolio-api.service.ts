import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioAPIService {

  portfolioURL: string = "https://tp-portfolio-server.herokuapp.com/";
  portfolioEXT: string = "portfolio/"
  positionEXT: string = "positions/"

  constructor(private http: HttpClient, private user: UserService) { }

  getPortfolio(): Observable<any> {
    let token = this.user.getToken();
    return this.http.get<any>(this.portfolioURL + this.portfolioEXT + token);
  }

  buyInvestment(investment: object) {
    let token = this.user.getToken();
    return this.http.post<any>(this.portfolioURL + this.positionEXT + token, investment)
  }
}
