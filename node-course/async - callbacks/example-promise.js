var request = require('request');
function getWeather(location){
	return new Promise(function(resolve,reject){
	var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodedLocation+'&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';
	if(!location){
		return reject('No location provided');
	}
	request({
			url:url,
			json:true
		}, function (error,response,body){
			if(error){
				reject('Unable to featch weather');
			}else{
				resolve('It\'s '+ body.main.temp + ' in '+ body.name);
			}
	});
	});
}
getWeather('Guatemala').then(function(currentWeather){
	console.log(currentWeather);
},function (error){
	console.log(error);
});