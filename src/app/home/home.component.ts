import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private user: UserService) { }

  ngOnInit(): void {
    console.log("Token: ", this.user.getToken())
    if(this.user.getToken().length > 0) {
      this.loggedIn = true;
    }
  }

}
