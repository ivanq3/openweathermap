import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.css']
})
export class WeatherCityComponent {
  weatherCity: {
    lng: number,
    lat: number,
    name: string,
    tempByHour: [],
    time: [],
  };

  constructor(private router: Router) {}

  goHome() {
    this.router.navigateByUrl('');
  }

}
