import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getMatIconNameNotFoundError } from '@angular/material/icon';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "";
  token: string = "";

  email: string = "";
  password: string = "";
  loginTime: Date = new Date();
  delay: number = 1800000;

  first: string = "";

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    let body = {email: email, password: password}
    this.email = email;
    this.password = password;
    return this.http.post("https://vg-db-users.herokuapp.com/auth/getToken", body);
  }

  createUser(user: string, password: string, first: string, last: string) {

    let body: {} = {
      email: user,
      password: password,
      first: first,
      last: last,
      phone: "555-555-5555",
      security_question: "Sec Q",
      security_answer: "Sec A",
    }
    
    return this.http.post("https://vg-db-users.herokuapp.com/users/", body);
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    if(this.token) {
        let now = new Date();
        if(now.getTime() > this.loginTime.getTime() + this.delay) {
          this.login(this.email, this.password)
          .subscribe((payload: any) => {
            this.setToken(payload.token);
            if(this.first.length === 0) {
              this.http.post("https://vg-db-users.herokuapp.com/users/get", {token:payload.token})
              .subscribe((payload: any) => {
                //if additional user data is needed, it can be added from this payload
                this.first = payload.first;
              })
            }
            return this.token;
          })
        }
    }
    return this.token;
  }

  setName(first: string) {
    this.first = first;
  }

  getName() {
    console.log("Start name: ", this.first);
    //if(this.first.length === 0 && this.token.length > 0) {
    return this.http.post("https://vg-db-users.herokuapp.com/users/get", {token:this.token})
    
    // } else {
    //   return this.first;
    // }
  }
}


