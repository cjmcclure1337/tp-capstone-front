import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InvestmentFront';

  loginModal: boolean = false;
  email: string = "";
  password: string = "";

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loginModal = false;
    this.clearForm();
  }

  toggleModal() {
    (this.loginModal) ? this.loginModal = false : this.loginModal = true;
  }

  doNothing() {

  }

  login() {
    console.log("Email: ", this.email)
    this.userService.login(this.email, this.password)
    .subscribe((payload: any) => {
      this.userService.setToken(payload.token);
      this.ngOnInit();
    })
  }

  clearForm() {
    this.email = "";
    this.password = "";
  }
}
