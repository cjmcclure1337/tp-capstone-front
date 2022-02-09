import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InvestmentFront';

  loginModal: boolean = false;
  email: string = "";
  password: string = "";

  constructor(private userService: UserService) {}

  toggleModal() {
    (this.loginModal) ? this.loginModal = false : this.loginModal = true;
  }

  doNothing() {

  }

  login() {
    // this.userService.login(this.email, this.password)
    // .subscribe((payload) => {
    //   console.log("Login response: ", payload)
    // })
  }
}
