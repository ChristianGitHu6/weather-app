import {NgModule} from "@angular/core";
import {WeatherComponent} from "./components/weather/weather.component";
import {CommonModule} from "@angular/common";
import {WeatherRoutingModule} from "./weather-routing.module";
import {SharedModule} from "../shared/shared.module";
import {NgxsModule} from "@ngxs/store";
import {WeatherState} from "./store/weather.state";
import {FooterComponent} from "./components/footer/footer.component";
import {ApiWeatherService} from "./services/api-weather.service";
import {WEATHER_SERVICE} from "./services/weather.service";

@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule,
    NgxsModule.forFeature([WeatherState])
  ],
  providers: [
    {
      provide: WEATHER_SERVICE,
      useClass: ApiWeatherService
    }
  ],
  declarations: [WeatherComponent, FooterComponent],
  exports: [WeatherComponent, FooterComponent]
})
export class WeatherModule { }
