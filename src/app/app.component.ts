import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'vendor-management';
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.fetchUserInfo()
  }
  
}
