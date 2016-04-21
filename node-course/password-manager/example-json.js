var person = {
	name:'Andrew',
	age:24
};
var personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);

//revert string to json 
var personObject  = JSON.parse(personJSON);
console.log(personObject.name);
console.log(typeof personObject);

var animal = '{"name":"Halley"}';
var animalObject = JSON.parse(animal);
animalObject.age = 5;
var animalJSON = JSON.stringify(animalObject);
console.log(animalJSON);
