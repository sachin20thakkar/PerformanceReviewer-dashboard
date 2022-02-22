import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInfo } from 'src/models/user.model';

const ASSET_URL = '/assets/mock';
export type UserInfoType = UserInfo | null;
@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService {
    private userInfo: BehaviorSubject<UserInfoType>= new BehaviorSubject<UserInfoType>(null);
    constructor(private httpClient: HttpClient) { }

    fetchUserInfo() {
       this.httpClient.get(`${ASSET_URL}/${environment.currentUser}.json`).subscribe((user) => {
        this.userInfo.next(user as UserInfoType);
       })
    }

    getUserInfo() {
        return this.userInfo;
    }
}