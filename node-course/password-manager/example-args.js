var argv = require('yargs')
	.command('hello','Greats the user',function(yargs){
		yargs.options({
			name:{
				demand:true,
				description:'Your first name goes hear',
				alias:'n'
			},
			lastname:{
				demand:false,
				description:'Your lastname goes hear',
				alias:'l'
			}
		}).help('help')
	})
	.help('help')
	.argv;
var command = argv._[0];

console.log(argv);

if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined') {
	console.log('Hello ' + argv.name + ' ' + argv.lastname + '!');
} else if (command === 'hello' && typeof argv.name !== 'undefined') {
	console.log('Hello ' + argv.name + '!');
} else if (command === 'hello') {
	console.log('Hello world!');
}
