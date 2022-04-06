import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_END_POINT = "https://api.spacexdata.com/v3/launches?flight_number=";
  
  constructor(private httpClient: HttpClient) { }

  getAllFlights() {
    return this.httpClient.get(`${this.REST_API_END_POINT}`)
  }

  getMissionByID(id: any) {
    return this.httpClient.get(`${this.REST_API_END_POINT}${id}`)
  }
  
}
