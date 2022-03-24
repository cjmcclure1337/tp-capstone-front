import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  loggedIn: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if(this.userService.getToken().length > 0) {
      this.loggedIn = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

}
