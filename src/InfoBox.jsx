import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIt_URL = "https://images.unsplash.com/photo-1668423240168-90624402ffec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1pc3QlMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
    
    const HOT_URL = "https://media.istockphoto.com/id/531626414/photo/solar-energy-blazing-noonday-sun-in-clear-sky.webp?b=1&s=170667a&w=0&k=20&c=v6N9BuTuSa7dhSANU--i-JSOTZTzqhroOnqXI205XM0=";
    const COLD_URL ="https://images.unsplash.com/photo-1593435713463-e8bf5bea9786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNub3d8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1632058098906-b947801d0bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";
   
    return (
        <div className="InfoBox">
            <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 
          ? RAIN_URL 
          : info.temp > 15 
          ? HOT_URL
           : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature = {info.temp}&deg;C</p>
        <div>humidity = {info.humidity}</div>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        <p>The weather can be descibed as <b>{info.weather}</b> feels like= {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    );
}