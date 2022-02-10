import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "";
  token: string = "";
  loginTime: Date = new Date();

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    let body = {email: email, password: password}
    console.log("Body: ", body)
    return this.http.post("https://vg-db-users.herokuapp.com/auth/getToken", body);
  }

  createUser(user: string, password: string) {
    //API call to create user, if it doesn't give a token then also call the login function
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }
}
