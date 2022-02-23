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
        let currentUser = localStorage.getItem('user');
        if(!currentUser) {
            localStorage.setItem('user', environment.currentUser);
            currentUser = environment.currentUser;
        }
       this.httpClient.get(`${ASSET_URL}/${currentUser}.json`).subscribe((data: any) => {
        this.userInfo.next(data?.people?.reviewerInfo as UserInfoType);
       })
    }

    getUserInfo() {
        return this.userInfo;
    }

    getContigentsList() {
        return this.userInfo.value?.contigents || [];
    }
}