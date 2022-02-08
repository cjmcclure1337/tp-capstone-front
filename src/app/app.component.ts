import { Component } from '@angular/core';

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

  toggleModal() {
    (this.loginModal) ? this.loginModal = false : this.loginModal = true;
  }

  doNothing() {

  }
}
