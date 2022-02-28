import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contigent } from 'src/models/contigent.model';
import { UserInfo } from 'src/models/user.model';

const ASSET_URL = '/assets/mock';
export type UserInfoType = UserInfo | null;
@Injectable(
    {
        providedIn: 'root'
    }
)
export class LoaderService {
    private showLoaderSubject: BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);
    constructor(private httpClient: HttpClient) { }

    setLoader(value: boolean) {
       this.showLoaderSubject.next(value);
    }

    get loader() {
       return  this.showLoaderSubject.asObservable()
    }
}