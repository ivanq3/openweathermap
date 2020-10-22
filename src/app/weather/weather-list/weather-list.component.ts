import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { weatherModel } from '../weather.model';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit, OnDestroy {

  private weather: any;
  private httpSub: Subscription;

  constructor(private http: HttpClient, private router: Router) {}

  weatherList : weatherModel[] = [];

  // cities ids : 792680,787657,2867714,2643743,6359304

  getWeatherList() {
    this.httpSub = this.http.get(`https://api.openweathermap.org/data/2.5/group?id=792680,787657,2867714,2643743,6359304&appid=${environment.openWeatherMapAPIKey}&units=metric`).subscribe( (responseData) => {
      this.weather = responseData;
      for (let i = 0; i < 5; i++){
        // tslint:disable-next-line:max-line-length
        const newItem: weatherModel = { city: this.weather.list[i].name , wind: (Math.round(this.weather.list[i].wind.speed)).toString(), temp: Math.round(this.weather.list[i].main.temp), lat: this.weather.list[i].coord.lat, lon: this.weather.list[i].coord.lon };
        this.weatherList.push(newItem);
      }
    });
  }

  ngOnInit() {
    this.getWeatherList();
  }

  removeLink(){

  }
  
  onCityWeather(weatherItem:any) {
    this.router.navigate(['/','city',weatherItem.city]);
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.weatherList, event.previousIndex, event.currentIndex);
  }
  
  ngOnDestroy() {
    this.httpSub.unsubscribe();
  }
}
