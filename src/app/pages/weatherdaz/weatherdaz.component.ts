import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weatherdaz',
  templateUrl: './weatherdaz.component.html',
  styleUrls: ['./weatherdaz.component.css']
})
export class WeatherdazComponent implements OnInit {

  WeatherDatas:any;
  location = "London";
  
  constructor() { 
    this.WeatherDatas = {
      main: {},
      isDay : true,
      

  }
 

  }
  ngOnInit(){
    //this.getWeatherData();
    console.log(this.WeatherDatas)

  }


  getVal(Val:string){ //getting the Value of the Inbox text. 
    console.warn(Val)
    this.location=Val
}

  getWeatherData(location: string){
    
    console.log("we are in weatherdata");
    console.log(location)
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ location + '&appid=35045b75c7ef3f60d5df8b406e89ff1b') //Fetching the Weather data from API
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})

  }

  setWeatherData(data: any){ //Setting all the Parameters and Variables for the Weather Data 
    this.WeatherDatas = data;
    let sunsetTime = new Date(this.WeatherDatas.sys.sunset *1000)
    this.WeatherDatas.sunset_time =sunsetTime.toLocaleDateString();
    let currentDate = new Date();
    this.WeatherDatas.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherDatas.temp_celcius = (this.WeatherDatas.main.temp - 273.15 ).toFixed(0);
    this.WeatherDatas.temp_min = (this.WeatherDatas.main.temp_min - 273.15 ).toFixed(0);
    this.WeatherDatas.temp_max = (this.WeatherDatas.main.temp_max - 273.15 ).toFixed(0);
    this.WeatherDatas.temp_feels_like = (this.WeatherDatas.main.feels_like - 273.15 ).toFixed(0);

  }
}
