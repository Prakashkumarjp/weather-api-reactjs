import axios from 'axios';

const weatherUrl ='https://api.openweathermap.org/data/2.5/weather?';
const weatherKey = 'api key';
const getWeatherData =async(cityName)=>{
            try{
           const {data} =await axios.get(weatherUrl + `q=${cityName}&appid=${weatherKey}`);
           return data;
            }catch(error){
                        throw error;
            }
}


export default getWeatherData;