import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: string = "";
  first: string = "";
  last: string = "";
  password: string = "";
  password2: string = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    this.userService.createUser(this.user, this.password, this.first, this.last)
    .subscribe((response: any) => {
      console.log(response.message);

      this.userService.login(this.user, this.password)
      .subscribe((payload: any) => {
        this.userService.setToken(payload.token);
        this.router.navigateByUrl("portfolio");
      })
    })
  }

}
