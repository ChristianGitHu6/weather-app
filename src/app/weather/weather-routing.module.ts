import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WeatherComponent} from "./components/weather/weather.component";

const routes: Routes = [
  {
    path: '',
    component: WeatherComponent
  },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule {}
