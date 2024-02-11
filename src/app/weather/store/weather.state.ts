import {Injectable} from "@angular/core";
import {Action, Actions, Selector, State, StateContext} from "@ngxs/store";
import {defaultLoadableState, LoadableState, Location, WeatherModel} from "../models/weather.model";
import * as WeatherActions from './weather.action';
import {WeatherService} from "../services/weather.service";


interface WeatherStateModel {
  weather: WeatherModel | undefined;
  autoCompleteSearchLocations: Location[];
}

export const INITIAL_WEATHER_STATE: WeatherStateModel = {
  weather: undefined,
  autoCompleteSearchLocations: []
};

@State<WeatherStateModel>({
  name: 'weather',
  defaults: INITIAL_WEATHER_STATE,
})
@Injectable()
export class WeatherState {

  @Selector()
  static weather({ weather }: WeatherStateModel): WeatherModel {
    return <WeatherModel>weather;
  }

  @Selector()
  static getAutoCompleteSearchLocations({ autoCompleteSearchLocations }: WeatherStateModel): Location[] {
    return autoCompleteSearchLocations;
  }

  constructor(private weatherService: WeatherService) {
  }

  @Action(WeatherActions.SearchCountry)
  searchCountry(
    { patchState }: StateContext<WeatherStateModel>,
    { searchKey }: WeatherActions.SearchCountry
  ) {
    this.weatherService.searchLocation(searchKey).subscribe((data) => {
      if (data) {
        patchState({
          autoCompleteSearchLocations: data,
        });
      } else {
        patchState({
          autoCompleteSearchLocations: [],
        });
      }
    });
  }


  @Action(WeatherActions.SelectCountry)
  selectCountry(
    { patchState }: StateContext<WeatherStateModel>,
    { country }: WeatherActions.SelectCountry
  ) {
    this.weatherService.getWeather(country).subscribe((data) => {
      if (data) {
        patchState({
          weather: data,
        });
      }
    });
  }
}
