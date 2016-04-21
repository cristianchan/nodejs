setTimeout(function (argument) {
	console.log('1');
},2000);
setTimeout(function (argument) {
	console.log('3');
},1000);
console.log('2');

console.log('challange');
function preintInTwo(message){
	setTimeout(function(argument){
		console.log(message);
	},2000);

}
preintInTwo('Hello async');