import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StockAPIService {

  stockURL = "https://boiling-falls-79972.herokuapp.com/info";

  constructor(private http: HttpClient) { }

  getStockInformation(): Observable<any> {
    return this.http.get(this.stockURL);
  }
}
