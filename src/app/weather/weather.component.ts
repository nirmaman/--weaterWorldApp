import { Component, OnInit } from '@angular/core';
import { Current , Location} from '../models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService){}
  
  current?: Current
  location?: Location
  cityName = 'Jerusalem'

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = ""
  }
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = ""
  }
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.current = response.current
        this.location = response.location
        console.log(response); 
      }
    })
}

}
