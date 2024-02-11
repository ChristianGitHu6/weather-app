import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoadableState, Location, WeatherModel} from "../../models/weather.model";
import {debounceTime, Observable, Subject, Subscription} from "rxjs";
import {Select, Selector, Store} from "@ngxs/store";
import {WeatherState} from "../../store/weather.state";
import {SearchCountry, SelectCountry} from "../../store/weather.action";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit, OnDestroy{

  @Select(WeatherState.weather)
  weather$: Observable<WeatherModel>;

  @Select(WeatherState.getAutoCompleteSearchLocations)
  autoCompleteLocations: Observable<Location[]>;

  searchSubject$ = new Subject<string>;
  searchSubscription: Subscription;
  selectedOption: string = 'London';
  searchKey: string = '';

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.searchSubscription  = this.searchSubject$.pipe(
      debounceTime(500)
    ).subscribe((item) => {
      this.fireSearch(item);
    })

    this.store.dispatch(new SelectCountry(this.selectedOption))
  }
  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }

  onInputChange() {
    this.searchSubject$.next(this.searchKey);
  }

  fireSearch(searchKey: string) {
    this.store.dispatch(new SearchCountry(searchKey))
  }

  selectCountry(location: Location) {
    this.selectedOption = location.name;
    this.store.dispatch(new SelectCountry(location.name))
  }
}
