import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { weatherModel } from '../../weather.model';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css'],
})
export class WeatherItemComponent implements OnInit {

  @Input() weatherItem: weatherModel;

  ngOnInit() {
    console.log(this.weatherItem);
  }


  // private httpSub: Subscription;

  // constructor(private http: HttpClient) {}

  // getCityHourly(lat, lon) {
  //   const url = 'https://api.openweathermap.org/data/2.5/onecall?' + lat.toString + '&' + lon.toString() + '&exclude=minutely,daily,alerts&appid=6ebf52f98b77438b50e9807605abc8a1&units=metric';
  //   this.httpSub = this.http.get(url).subscribe( (responseData) => {
  //     console.log(responseData);
  //   });
  // }


}
