import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email: String = "";
  password: String = "";
  password2: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  signup() {
    console.log("Signing up new user")
  }

}
