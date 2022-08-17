import { Component, OnInit } from '@angular/core';
import { Current , Location} from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService : WeatherService){}
  
  
  ngOnInit(): void {}

  

  
}
