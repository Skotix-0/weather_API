"use strict"

function creat_weather_block (temp, feels_like_temp, weather_type, wind_speed, humidity){
    console.log(`Температура ${(temp - 273).toFixed(1)}`);
    console.log(`Ощущается как ${(feels_like_temp - 273).toFixed(1)}`);
    console.log(`Тип погоды ${weather_type}`);
    console.log(`Скорость ветра ${wind_speed}`);
    console.log(`Влажность ${humidity}`);
}

$('#city_input').on('change', () => {
    $.ajax({         
        url : `https://api.openweathermap.org/data/2.5/weather?q=${$('#city_input').val()}&appid=1b9d3c2eda693f219aa7ebb8f46d99be&lang=ru`,
        method: 'post',               
        success: function(data){   
            // console.log(data);    
            creat_weather_block(data.main.temp, data.main.feels_like, data.weather[0].description, data.wind.speed, data.main.humidity);        
        }
    });
});


