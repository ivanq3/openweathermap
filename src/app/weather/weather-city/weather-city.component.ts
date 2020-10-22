import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Location } from '@angular/common';

enum cities { 'Belgrade', 'Nis', 'Munich', 'London', 'Madrid' };

@Component({
  selector: 'app-weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.css']
})
export class WeatherCityComponent implements OnInit {
  // mat-slider
  title = 'Weather Hourly'; 
  disabled = false;
  invert = false;
  thumbLabel = false;
  value = 0;
  vertical = false;

  // @Input() weatherItem : weatherModel;
  cityHour: string;
  private lat: number;
  private lon: number;
  private url: string = '';
  cityHourly : { dt: number, temp: number}[] = [];

  constructor(private _location: Location, private activatedRoute: ActivatedRoute, private http: HttpClient ) {}

  private checkCity(city) {
    if (city in cities) {
      this.cityHour = city;
      return true;
    } else {
      this.cityHour = 'Belgrade';
      return false;
    }
  }

  private setLatLon(city:string) {
    switch (city) {
      case 'Belgrade':{
        this.lat = 44.8;
        this.lon = 20.47;
        break;
      }
      case 'Nis': {
        this.lat = 43.32;
        this.lon = 21.9;
        break;
      }
      case 'Munich': {
        this.lat = 48.14;
        this.lon = 11.58;
      }
      case 'London': {
        this.lat = 51.51;
        this.lon = -0.13;
      }
      case 'Madrid': {
        this.lat = 40.49;
        this.lon = -3.68;
      }
      default: 'Belgrade'
        break;
    }
  }

  private buildUrl() {
    this.url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&appid=${environment.openWeatherMapAPIKey}&units=metric&exclude=daily,alerts,minutely`
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((p) => {
      this.cityHour = p.city;
      this.setLatLon(p.city);
      this.buildUrl();
      
      this.http.get<any>(this.url)
        .pipe(
          map((resData) => {
            return resData.hourly;
          })
        )
        .subscribe((resData) => {
          for(let i = 0; i < 48; i++){
            let newTime : { dt: number, temp:number} = { dt : null, temp: null};
            newTime.dt = resData[i].dt*1000;
            newTime.temp = Math.round(resData[i].temp);
            this.cityHourly.push(newTime);
          }
      });
    })
  }

  goHome() {
    this._location.back();
  }

}
