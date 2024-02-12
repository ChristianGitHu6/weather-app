import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Location, WeatherModel} from "../models/weather.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


export const WEATHER_SERVICE
  = new InjectionToken<WeatherService>('[Weather] WeatherService');

export interface WeatherService {
  getWeather(city: string): Observable<WeatherModel>

  searchLocation(searchKey: string): Observable<Location[]>
}
