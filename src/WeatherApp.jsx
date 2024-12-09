import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bhilwara",
        feelsLike: 11.45,
       humidity: 82,
       temp: 12.05,
       tempMax: 12.05,
       tempMin: 12.05,
       weather: "mist",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return (
    <div style={{textAlign: "center"}}>
        <h2>Weather App by Nishtech</h2>
        <SearchBox updateInfo = {updateInfo}/>
    <InfoBox  info={weatherInfo}/>
        </div>);
}