import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { WeatherCityComponent } from './weather/weather-city/weather-city.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';

const routes: Routes = [
  { path: 'city/:city', component: WeatherCityComponent },
  { path: '', component: WeatherListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
