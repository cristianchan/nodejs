var name = 'Hola'

function greatUser(nombre)
{
	if(typeof nombre !== 'undefined'){
		console.log('Hello '+nombre);
	}
	else{
		console.log('Hello world');	
	}
}

greatUser('Chan');
greatUser(undefined);