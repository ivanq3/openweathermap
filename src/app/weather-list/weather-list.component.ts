import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { weatherModel } from '../weather.model';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit, OnDestroy {

  weatherList: weatherModel[] = [];
  private weather: any;
  httpSub: Subscription;

  constructor(private http: HttpClient) {}

  // cities ids : 792680,787657,2867714,2643743,6359304

  getWeatherList() {
    this.httpSub = this.http.get('http://api.openweathermap.org/data/2.5/group?id=792680,787657,2867714,2643743,6359304&appid=6ebf52f98b77438b50e9807605abc8a1&units=metric').subscribe( (responseData) => {
      this.weather = responseData;
      for (let i = 0; i < 5; i++){
        // tslint:disable-next-line:max-line-length
        const newItem: weatherModel = { city: this.weather.list[i].name , wind: (Math.round(this.weather.list[i].wind.speed)).toString(), temp: Math.round(this.weather.list[i].main.temp), lat: this.weather.list[i].coord.lat, lon: this.weather.list[i].coord.lon };
        this.weatherList.push(newItem);
      }
      console.log(responseData);
    });
  }

  // getWeatherList() {
  //   this.httpSub = this.http.get('http://api.openweathermap.org/data/2.5/group?id=792680,787657,2867714,2643743,6359304&appid=6ebf52f98b77438b50e9807605abc8a1&units=metric').subscribe( (responseData) => {
  //     this.weather = responseData;
  //     const coord = responseData.list.map(r => r.coord);
  //     const name = responseData.list.map(r => r.name);
  //     const wind = responseData.list.map(r => r.wind.speed);
  //     const temp = responseData.list.map(r => r.main.temp);
  //     return {name, wind, temp, coord};
  //       // tslint:disable-next-line:max-line-length
  //       const newItem: { city: string, wind: string, temperature: number } = { city: this.weather.list[i].name , wind: (Math.round(this.weather.list[i].wind.speed)).toString(), temperature: Math.round(this.weather.list[i].main.temp) };
  //       this.weatherList.push(newItem);
  //     }
  //     console.log(responseData);
  //   });
  // }


  ngOnInit() {
    this.getWeatherList();
  }


  ngOnDestroy() {
    this.httpSub.unsubscribe();
  }
}
