var crypto = require('crypto-js');
var secretMessage = {
	name: 'Andrew',
	secretName: '007'
};
var secretKey = '123abc';
var secretMessageJSON = JSON.stringify(secretMessage);



var encryptedMessage = crypto.AES.encrypt(secretMessageJSON,secretKey);
console.log('Encripted Message: ' + encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decrypedMessage = bytes.toString(crypto.enc.Utf8);
var decrypedMessageObject = JSON.parse(decrypedMessage);
console.log('Secrete Name : ' + decrypedMessageObject.secretName);