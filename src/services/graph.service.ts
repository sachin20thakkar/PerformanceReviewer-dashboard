import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const ASSET_URL = '/assets/mock';
@Injectable(
    {
        providedIn: 'root'
    }
)
export class ChartService {
   constructor(private httpClient: HttpClient) { }

    fetchChartList(){
       return this.httpClient.get(`${ASSET_URL}/chart-list.json`)
    }

}