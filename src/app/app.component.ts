import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InvestmentFront';

  loginModal: boolean = false;
  user: string = "";
  password: string = "";

  loggedIn: boolean = false;
  first: any = "";

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loginModal = false;
    this.clearForm();

    if(this.userService.getToken().length > 0) {
      this.loggedIn = true;
      console.log("Logged in")
    }
  }

  toggleModal() {
    (this.loginModal) ? this.loginModal = false : this.loginModal = true;
  }

  doNothing() {

  }

  login() {
    console.log("Username: ", this.user)
    this.userService.login(this.user, this.password)
    .subscribe((payload: any) => {
      this.userService.setToken(payload.token);
      this.userService.getName()
      .subscribe((response: any) => {
        this.first = response.first;
        this.userService.setName(response.first);
      })
      this.ngOnInit();
      this.router.navigateByUrl("portfolio");
    })
  }

  clearForm() {
    this.user = "";
    this.password = "";
  }
}
