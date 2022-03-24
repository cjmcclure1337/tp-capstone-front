import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
            return this.token;
          })
        }
    }
    return this.token;
  }
}
