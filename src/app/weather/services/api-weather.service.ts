import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Location, WeatherModel} from "../models/weather.model";
import {Observable} from "rxjs";
import {WeatherService} from "./weather.service";


@Injectable()
export class ApiWeatherService implements WeatherService{
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
