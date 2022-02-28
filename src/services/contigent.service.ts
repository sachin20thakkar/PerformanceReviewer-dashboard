import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contigent } from 'src/models/contigent.model';
import { UserInfo } from 'src/models/user.model';
import { UserService } from './user.service';

const ASSET_URL = '/assets/mock';
export type UserInfoType = UserInfo | null;
@Injectable(
    {
        providedIn: 'root'
    }
)
export class ContigentService {
    private contigentList: BehaviorSubject<Contigent[]>= new BehaviorSubject<Contigent[]>([]);
    constructor(private httpClient: HttpClient, private userService: UserService) { }

    getContigentPE(userId: string) {
        return this.httpClient.get(`${ASSET_URL}/questions-list/${userId}.json`);
    }

    saveDraft(payload: any): Observable<any> {
        // return this.httpClient.post(`${ASSET_URL}/questions-list/${userId}.json`, payload).pipe(tap(() => {
        //     this.userService.fetchUserInfo()
        // }));
        return of().pipe(tap(() => {
            this.userService.fetchUserInfo()
        }));;
    }

    submitForm(payload: any): Observable<any> {
        // return this.httpClient.post(`${ASSET_URL}/questions-list/${userId}.json`, payload).pipe(tap(() => {
        //     this.userService.fetchUserInfo()
        // }));
        return of().pipe(tap(() => {
            this.userService.fetchUserInfo()
        }));
    }
}