import { Component, Input } from '@angular/core';
import { weatherModel } from '../../weather.model';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css'],
})
export class WeatherItemComponent {

  @Input() weatherItem: weatherModel;

}
