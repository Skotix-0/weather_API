"use strict"

function creat_weather_block (temp, feels_like_temp, weather_type, wind_speed, humidity, pressure){
    let background_img = document.querySelector('.main').style;
    let icon_weather = document.querySelector('#icon_weather');

    switch (weather_type) {
        case 'облачно с прояснениями':
                background_img.background = 'url("images/weather/oblochno s proesneniami.jpg") center no-repeat';
                icon_weather.innerHTML = '<img src="images/weather_icons/oblochnoSproesneniami_icon.svg" alt="">';
            break;

        case 'переменная облачность':
                background_img.background = 'url("images/weather/oblochno s proesneniami.jpg") center no-repeat';
                icon_weather.innerHTML = '<img src="images/weather_icons/oblochno_icon.svg" alt="">';
            break;

        case 'пасмурно':
                background_img.background = 'url("images/weather/Pasmurno.jpg") center no-repeat';
                icon_weather.innerHTML = '<img src="images/weather_icons/oblochno_icon.svg" alt="">';
            break;

        case 'ясно':
                background_img.background = 'url("images/weather/Yasno.jpg") center no-repeat';
                icon_weather.innerHTML = '<img src="images/weather_icons/Yasno_icon.svg" alt="">';
            break;

        case 'небольшой дождь':
                background_img.background = 'url("images/weather/rain.jpg") center no-repeat';
                icon_weather.innerHTML = '<img src="images/weather_icons/rain_icon.svg" alt="">';
            break;

        case 'дождь':
                background_img.background = 'url("images/weather/rain.jpg") center no-repeat';
                icon_weather.innerHTML = '<img src="images/weather_icons/rain_icon.svg" alt="">';
            break;
        

        default:
            break;
    }
    background_img.backgroundSize = 'cover';

    document.querySelector('#temp').innerHTML = (temp - 273).toFixed(1);
    document.querySelector('#feels_like_temp').innerHTML = (feels_like_temp - 273).toFixed(1);
    document.querySelector('#weather_type').innerHTML = weather_type;
    document.querySelector('#wind_speed').innerHTML = wind_speed;
    document.querySelector('#humidity').innerHTML = humidity;
    document.querySelector('#pressure').innerHTML = (pressure * 0.75).toFixed(1);
}

function get_data (){
    $.ajax({         
        url : `https://api.openweathermap.org/data/2.5/weather?q=${$('#city_input').val()}&appid=1b9d3c2eda693f219aa7ebb8f46d99be&lang=ru`,
        method: 'post',               
        success: function(data){     
            creat_weather_block(data.main.temp, data.main.feels_like, data.weather[0].description, data.wind.speed, data.main.humidity, data.main.pressure);        
        },
        error: function(){
            $('#city_input').val('Город не найден');
        }
    });
}

window.onload = function () {
    $.ajax({
        url: 'http://ip-api.com/json',
        method: 'post',               
        success: function(data){   
            $('#city_input').val(data.city);
            get_data();
        }
    });
}

$('#city_input').on('change', () => {
    get_data();
});


