const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "66dec478fe8e9a62844b82951979d2d4"
}

function getWeather(){
    const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		})
    .then(showWeather);
    
        
}
getWeather();
document.querySelector('#city').onchange = getWeather;

function showWeather(data) {
	document.querySelector('.package-name').textContent=data.name;
    document.querySelector('.price').innerHTML=Math.round(data.main.temp)+'&deg;';
    document.querySelector('.disclaimer').textContent=data.weather[0]['description'];
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.pressure').textContent = data.main.pressure+"hPa"; 
    console.log(data);
}

