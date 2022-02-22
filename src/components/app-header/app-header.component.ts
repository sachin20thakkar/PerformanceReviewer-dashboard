import { Component, OnInit } from '@angular/core';
import { UserInfoType, UserService } from 'src/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.sass']
})
export class AppHeaderComponent implements OnInit {
  userInfo:UserInfoType = null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((user: UserInfoType) => {
      this.userInfo = user;
    })
  }

}
