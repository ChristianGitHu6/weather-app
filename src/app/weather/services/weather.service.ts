import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Location, WeatherModel} from "../models/weather.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private httpClient: HttpClient) {
  }

  getWeather(city: string) {
    const url = `${this.apiUrl}current.json?key=${this.apiKey}&q=${city}&aqi=no`;
    return this.httpClient.get<WeatherModel>(url);
  }

  searchLocation(searchKey: string): Observable<Location[]> {
    const url = `${this.apiUrl}search.json?key=${this.apiKey}&q=${searchKey}&aqi=no`;
    return this.httpClient.get<Location[]>(url);
  }

}
