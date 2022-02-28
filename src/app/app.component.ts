import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/services/loader.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'vendor-management';
  public showLoader = false;
  constructor(private userService: UserService, private loaderService: LoaderService) {}
  ngOnInit(): void {
    this.userService.fetchUserInfo();
    this.loaderService.loader.subscribe((showLoader: boolean) => {
      this.showLoader = showLoader
    });
  }
  
}
