
var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
	.option('location',{
		alias: 'l',
		demand: false,
		describe:'Location to featch weather for'
	})
	.help('help')
	.argv;
if(typeof argv.l === 'string' && argv.l.length >0 ){
	weather(argv.l).then(function(weather){
		console.log(weather);
	}).catch(function(error){
		console.log(error);
	});
}else{
	location().then(function(loc){
		return weather(loc.city);
	}).then(function(currentWeather){
		console.log(currentWeather);
	}).catch(function(error){
		console.log(error);
	});
}

